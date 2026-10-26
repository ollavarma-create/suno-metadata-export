// =============================================================
// Suno Library Exporter v2 — Browser Console Script
// =============================================================
// Usage:
//   1. Log in to https://suno.com
//   2. Navigate to Library page
//   3. Open Developer Tools → Console (F12)
//   4. Paste this entire script and press Enter
//   5. Wait for completion — a JSON file will download automatically
// =============================================================

(async () => {
  const API_URL = 'https://studio-api-prod.suno.com/api/feed/v3';
  const DELAY_MS = 600;
  const allSongs = [];
  let cursor = null;
  let hasMore = true;
  let page = 0;

  // Get Clerk auth token
  if (!window.Clerk || !window.Clerk.session) {
    console.error('❌ Clerk session not found. Make sure you are logged in to suno.com.');
    return;
  }

  const token = await window.Clerk.session.getToken();
  if (!token) {
    console.error('❌ Could not get auth token. Try refreshing the page and logging in again.');
    return;
  }

  console.log('🎵 Suno Library Exporter v2 — Starting...');
  console.log('🔑 Auth token acquired.');

  while (hasMore) {
    page++;
    const body = cursor ? { cursor } : {};

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        console.error(`❌ HTTP ${res.status} on page ${page}. Stopping.`);
        // If 401, token may have expired
        if (res.status === 401) {
          console.error('🔑 Token expired. Refresh the page, log in, and try again.');
        }
        break;
      }

      const data = await res.json();
      const clips = data.clips || [];

      for (const clip of clips) {
        const song = {
          id: clip.id,
          title: clip.title || '(untitled)',
          lyrics: clip.metadata?.prompt || null,
          style_tags: clip.metadata?.tags || null,
          display_tags: clip.display_tags || null,
          caption: clip.caption || null,
          is_instrumental: clip.metadata?.make_instrumental || false,
          duration_seconds: clip.metadata?.duration || null,
          model_version: clip.major_model_version || clip.model_name || null,
          created_at: clip.created_at || null,
          is_public: clip.is_public || false,
          play_count: clip.play_count || 0,
          audio_url: clip.audio_url || null,
          image_url: clip.image_url || null,
        };
        allSongs.push(song);
      }

      console.log(
        `📄 Page ${page}: fetched ${clips.length} songs (total: ${allSongs.length})`
      );

      hasMore = data.has_more === true;
      cursor = data.next_cursor || null;

      if (!cursor && hasMore) {
        console.warn('⚠️  has_more=true but no cursor. Stopping.');
        break;
      }

      // Rate limit: wait between requests
      if (hasMore) {
        await new Promise((r) => setTimeout(r, DELAY_MS));
      }
    } catch (err) {
      console.error(`❌ Error on page ${page}:`, err);
      break;
    }
  }

  // --- Summary ---
  const instrumental = allSongs.filter((s) => s.is_instrumental).length;
  const withLyrics = allSongs.filter(
    (s) => !s.is_instrumental && s.lyrics
  ).length;

  console.log('');
  console.log('✅ Export complete!');
  console.log(`   Total songs:    ${allSongs.length}`);
  console.log(`   With lyrics:    ${withLyrics}`);
  console.log(`   Instrumental:   ${instrumental}`);
  console.log('');

  // --- Build export object ---
  const exportData = {
    exported_at: new Date().toISOString(),
    user_handle: 'fugoogle',
    total_songs: allSongs.length,
    songs: allSongs,
  };

  // --- Download as JSON ---
  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `suno-library-export-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('💾 JSON file downloaded!');
})();
