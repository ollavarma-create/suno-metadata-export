# AI Music Creation – Part 1: Tools, Techniques & Ownership




This article is the first in a multi-part series exploring the world of AI-assisted music creation. In future parts, I will delve into some of the biggest challenges in the field — particularly the difficulty of monetizing AI-generated songs, drawing from my experiences with [YouTube](https://www.youtube.com/) and [DistroKid](https://distrokid.com/). I will also explore how music creation using AI could serve therapeutic purposes or aid in self-reflection, similarly to psychology coursework that requires introspection through essay writing or creative expression. Additionally, I will share conceptual ideas about how AI could generate music tailored to individual life narratives, moods, or daily needs — and seek scientific studies on how personalized music affects well-being, productivity, and emotional regulation.

In this first part, I focus on the tools and techniques for generating music with artificial intelligence. I also share practical tips on what works and what doesn't — from improving audio quality to embedding invisible digital signatures in songs with the [Cryptoleaf steganography tool](https://github.com/ollavarma-create/cryptoleaf) I programmed.

### Overview of Available Platforms

AI-assisted music generation has become increasingly accessible through several innovative platforms. Three of the most prominent ones today are:

- [**Suno.com**](http://Suno.com) – Offers detailed musical arrangements and emotionally expressive vocals. My personal favorite, especially because I produced over 1,000 tracks in just two months, placing me among the top 1% of Suno creators by volume. However, vocal audio quality can sometimes suffer, and before publishing to other platforms, it's often necessary to improve the output with tools like **Audacity**.
- [**Udio.com**](http://Udio.com) – Known for high-quality background music, Udio allows quick generation of loopable and production-ready tracks. However, its lyric and vocal capabilities are more limited compared to Suno.
- [**Riffusion.com**](http://Riffusion.com) – Converts latent space visualizations into music. The audio output is often technically cleaner than Suno, but the result may feel less emotionally nuanced or musically rich. Riffusion uses a diffusion model to generate spectrogram images based on text prompts and then converts these visual representations into playable audio. This process leverages “latent space” — an internal multidimensional encoding — to translate prompt semantics into sound patterns. While innovative, this technique can sometimes lead to less expressive or more repetitive outputs. You can listen to my experiments here: [riffusion.com/Divergentti](http://riffusion.com/Divergentti).
- 
All of these platforms allow free usage, but with limitations. Typically, any music generated for free does **not** grant the user ownership rights. For commercial or full ownership rights:

[**Suno.com**](http://Suno.com) requires users to purchase credits. Their pricing (as of May 2025):

- Basic Plan: Free, 10 songs/day (non-commercial)
- ***Pro Plan: $10/month, 500 songs/month (commercial allowed)***
- Premier Plan: $30/month, 2,000 songs/month

### Copyright and Ownership

AI-generated music raises complex legal and ethical questions. If you generate tracks on the free tiers of platforms like Suno or Riffusion, you do not legally own the compositions. Only by using paid plans (such as Suno Pro or Premier) do you obtain commercial usage rights.

However, the copyright situation becomes murkier when it comes to how much human creativity is involved. Under current interpretations of [Creative Commons](https://creativecommons.org/2023/08/18/understanding-cc-licenses-and-generative-ai/) CC0, AI-generated works may fall into the public domain if they lack significant human authorship. But what qualifies as "significant"? If, for instance, Suno generates an entire song based on just a few user-input lines, the claim to copyright may be weak. In contrast, if you incorporate detailed research, draw from lived experiences, or use documents like essays and theses — as I often do — then the creative input arguably reaches a level deserving copyright.

For lyrics, the situation is more nuanced. While music platforms may not guarantee copyright over generated instrumentals, lyrics created using LLMs — especially when enhanced with your own input, personal experiences, or academic materials — can be attributed to you as original content. I often include the following notice with my songs on Suno.com:

> **Lyrics Notice** The lyrics were produced by brainstorming topics drawn from everyday life, psychology, and many other subjects. At LM Studio, I have used various language models, which I enhanced using RaG with additional knowledge from my theses, essays, and more. The music was produced using [Suno.com](http://Suno.com). The copyright for the lyrics belongs to Jari Hiltunen, but the music itself is free to use.

This type of declaration helps assert authorship of the lyrics, even though the legal enforceability may still be uncertain, especially across different jurisdictions. Unfortunately, similar notices on [YouTube](https://www.youtube.com/) have led to reduced visibility (shadow banning), highlighting the algorithmic opacity artists must contend with.

### What Works (and What Doesn’t)

Most modern LLMs — including ChatGPT — are capable of producing surprisingly good lyrics from conceptual prompts. However, if your goal is to use [Suno.com](http://Suno.com)’s metadata tags effectively, the best results come from using **LM Studio** with customized settings: a well-written system prompt, balanced **temperature**, and appropriate **Top P** and **Top K** values.

One advantage of LM Studio is privacy. Since it runs locally, you can safely incorporate personal experiences and sensitive content into your lyrics — something you might hesitate to share with online LLMs. In my own workflow, many songs draw lyrical inspiration from academic texts I’ve written: psychology essays, reflections, and even my thesis. These documents are incorporated into LM Studio via **Retrieval-Augmented Generation (RaG)**, enriching the model’s lyrical output with personal depth and intellectual context.

---

A typical creation flow for me looks like this (followed by an example of a working LM Studio system prompt):

- **Ideation** – I start from a central theme or emotional idea. For instance, the concept of “touch and connection” inspired one of my most viewed tracks.
- **Prompting the LLM** – I craft a detailed prompt for the language model, often including mood, theme, structure (verse/chorus/bridge), and even phonetic elements like onomatopoeia.
- **Refining Output** – I iterate on the generated lyrics, editing them for emotional depth and structure. Sometimes I add poetic metaphors or narrative arcs.
- **Selecting Music** – I test several instrumentals on [Suno.com](http://Suno.com) or other platforms to find the one that fits the lyrics best — often choosing by emotional resonance rather than technical fit.
- **Final Touches** – Before publishing, I might improve vocal quality using EQ in Audacity and embed a steganographic signature to mark authorship.
---

**Simple example System Prompt for LM Studio (used with private, RaG-enhanced data):**

*You are a creative lyricist and poet who writes emotionally expressive and thematically consistent lyrics for songs. Use evocative imagery, metaphors, and occasional onomatopoeia. Structure lyrics into verse, chorus, and bridge. Maintain a human, natural voice and avoid generic AI phrasing. You can draw from personalized memory fragments, psychological reflections, and poetic expressions fed through RaG.*

Important: Experimentation is also key to discovering what resonates. For example, testing with onomatopoeic lyrics can lead to surprisingly evocative results.

---

*Originally published on LinkedIn on 2025-05-23. Archived here for reference.*
