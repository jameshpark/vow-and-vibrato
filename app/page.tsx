"use client";

import { useMemo, useState } from "react";
import { songs, type Category, type Song } from "./songs";

type Preview = {
  url: string;
  artist: string;
  collection: string;
  track: string;
  kind: "String ensemble" | "Original / closest match";
};

type AppleResult = {
  artistName?: string;
  collectionName?: string;
  primaryGenreName?: string;
  trackName?: string;
  previewUrl?: string;
};

const filters: ("All" | Category)[] = ["All", "Classical", "Pop", "Entrance", "Recessional"];
const preferredTrackIds: Record<string, number> = {
  "entrance-0-bridal-chorus-here-comes-the-bride-": 664310930,
};

function scoreResult(result: AppleResult, song: Song) {
  const text = `${result.trackName} ${result.artistName} ${result.collectionName} ${result.primaryGenreName}`.toLowerCase();
  const significantWords = song.title.toLowerCase().split(/\W+/).filter((word) => word.length > 3);
  const titleScore = significantWords.reduce((score, word) => score + (text.includes(word) ? 3 : 0), 0);
  const stringScore = /(string|quartet|trio|duo|violin|cello|vitamin string)/.test(text) ? 12 : 0;
  const instrumentalScore = /(instrumental|wedding|classical)/.test(text) ? 3 : 0;
  const composer = song.composer.split(/\s+/).at(-1)?.toLowerCase() || "";
  const composerScore = composer.length > 3 && text.includes(composer) ? 8 : 0;
  const classicalGenreScore = /(classical|instrumental|easy listening)/.test(result.primaryGenreName?.toLowerCase() || "")
    ? 8
    : song.category === "Pop" ? 0 : -8;
  return titleScore + stringScore + instrumentalScore + composerScore + classicalGenreScore;
}

async function searchApple(term: string) {
  const response = await fetch(`https://itunes.apple.com/search?entity=song&limit=25&term=${encodeURIComponent(term)}`);
  if (!response.ok) throw new Error("Preview search unavailable");
  const data = await response.json() as { results: AppleResult[] };
  return data.results.filter((result) => result.previewUrl);
}

async function lookupApple(trackId: number) {
  const response = await fetch(`https://itunes.apple.com/lookup?id=${trackId}`);
  if (!response.ok) throw new Error("Preview lookup unavailable");
  const data = await response.json() as { results: AppleResult[] };
  return data.results.find((result) => result.previewUrl);
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<string | null>(null);
  const [previews, setPreviews] = useState<Record<string, Preview>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return songs.filter((song) =>
      (filter === "All" || song.category === filter) &&
      (!needle || `${song.title} ${song.composer}`.toLowerCase().includes(needle)),
    );
  }, [query, filter]);

  async function loadPreview(song: Song) {
    if (active === song.id) {
      setActive(null);
      return;
    }
    setActive(song.id);
    if (previews[song.id]) return;

    setLoading(song.id);
    setErrors((current) => ({ ...current, [song.id]: false }));
    try {
      const preferredTrackId = preferredTrackIds[song.id];
      let result = preferredTrackId ? await lookupApple(preferredTrackId) : undefined;
      let kind: Preview["kind"] = "String ensemble";

      if (!result) {
        const stringResults = await searchApple(`${song.title} ${song.composer} string quartet`);
        result = [...stringResults].sort((a, b) => scoreResult(b, song) - scoreResult(a, song))[0];
      }

      if (!preferredTrackId && (!result || scoreResult(result, song) < 12)) {
        const fallbackResults = await searchApple(`${song.title} ${song.composer}`);
        result = [...fallbackResults].sort((a, b) => scoreResult(b, song) - scoreResult(a, song))[0];
        kind = "Original / closest match";
      }

      if (!result?.previewUrl) throw new Error("No preview found");
      setPreviews((current) => ({
        ...current,
        [song.id]: {
          url: result.previewUrl!,
          artist: result.artistName || "Unknown artist",
          collection: result.collectionName || "Recording preview",
          track: result.trackName || song.title,
          kind,
        },
      }));
    } catch {
      setErrors((current) => ({ ...current, [song.id]: true }));
    } finally {
      setLoading(null);
    }
  }

  return (
    <main>
      <header className="hero" id="top">
        <nav>
          <a className="brand" href="#top">Vow <i>&amp;</i> Vibrato</a>
          <span>{songs.length} selections · string-first previews</span>
        </nav>
        <div className="hero-copy">
          <p className="eyebrow">A listening library for the aisle &amp; after</p>
          <h1>Find the song that<br /><em>sounds like you.</em></h1>
          <p className="lede">Hear the repertoire as a string duo, trio, or quartet whenever possible—with a faithful original recording as the fallback.</p>
          <a className="browse" href="#repertoire"><span>Browse the repertoire</span><b>↓</b></a>
        </div>
        <div className="ornament" aria-hidden="true"><span>𝄞</span></div>
        <p className="side-note">Curated for ceremonies, cocktails &amp; celebrations</p>
      </header>

      <section className="moments" aria-labelledby="moments-title">
        <div className="section-kicker"><span>01</span><p>Choose the moment</p></div>
        <div className="moments-copy">
          <div>
            <p className="eyebrow">Ceremony guide</p>
            <h2 id="moments-title">Set the tone,<br /><em>then make an entrance.</em></h2>
          </div>
          <p>Start with the part of the day you’re choosing music for. Each collection balances familiar favorites with pieces that feel a little less expected.</p>
        </div>
        <div className="moment-cards">
          <button onClick={() => { setFilter("Entrance"); document.querySelector("#repertoire")?.scrollIntoView(); }}>
            <span>Processional</span><strong>The walk in</strong><i>Poised · Warm · Anticipatory</i><b>05 pieces →</b>
          </button>
          <button onClick={() => { setFilter("Classical"); document.querySelector("#repertoire")?.scrollIntoView(); }}>
            <span>Ceremony</span><strong>The quiet center</strong><i>Reflective · Timeless · Tender</i><b>{songs.filter((song) => song.category === "Classical").length} pieces →</b>
          </button>
          <button onClick={() => { setFilter("Recessional"); document.querySelector("#repertoire")?.scrollIntoView(); }}>
            <span>Recessional</span><strong>The joyful exit</strong><i>Bright · Triumphant · Alive</i><b>06 pieces →</b>
          </button>
        </div>
      </section>

      <section className="catalog" id="repertoire" aria-labelledby="catalog-title">
        <div className="section-kicker"><span>02</span><p>Listen &amp; discover</p></div>
        <div className="catalog-head">
          <div><p className="eyebrow">The repertoire</p><h2 id="catalog-title">A song for<br />every moment</h2></div>
          <p>Select any title to load a licensed recording preview. We search string ensembles first and identify when the closest available rendition is used.</p>
        </div>

        <div className="controls">
          <div className="filters" role="group" aria-label="Filter repertoire">
            {filters.map((name) => <button key={name} className={filter === name ? "active" : ""} onClick={() => setFilter(name)}>{name}{name !== "All" && <sup>{songs.filter((song) => song.category === name).length}</sup>}</button>)}
          </div>
          <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title or composer" aria-label="Search repertoire" /></label>
        </div>

        <p className="result-count">Showing {filtered.length} {filtered.length === 1 ? "selection" : "selections"}</p>
        <div className="song-list">
          {filtered.map((song, index) => {
            const preview = previews[song.id];
            const isActive = active === song.id;
            return <article className={`song ${isActive ? "expanded" : ""}`} key={song.id}>
              <div className="song-row">
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <button className="play" onClick={() => loadPreview(song)} aria-label={`${isActive ? "Close" : "Listen to"} ${song.title}`}>{loading === song.id ? <span className="spinner" /> : isActive ? "×" : "▶"}</button>
                <div className="song-info"><h3>{song.title}</h3><p>{song.composer}</p></div>
                <span className={`tag ${song.category.toLowerCase()}`}>{song.category}</span>
                <span className="ensemble">Strings preferred <i>◌</i></span>
              </div>
              {isActive && <div className="inline-player">
                {preview ? <>
                  <div className="recording"><span>{preview.kind}</span><strong>{preview.track}</strong><p>{preview.artist} · {preview.collection}</p></div>
                  <audio src={preview.url} controls autoPlay aria-label={`Audio preview of ${song.title}`} />
                </> : errors[song.id] ? <div className="no-preview"><strong>Preview unavailable</strong><p>This recording could not be loaded right now. Try again in a moment.</p><button onClick={() => loadPreview(song)}>Try again</button></div> : <div className="finding"><span className="spinner" /><p>Finding the best available string recording…</p></div>}
              </div>}
            </article>;
          })}
          {filtered.length === 0 && <div className="empty"><span>𝄽</span><h3>No selections found</h3><p>Try a different title, composer, or collection.</p><button onClick={() => { setQuery(""); setFilter("All"); }}>Clear search</button></div>}
        </div>
      </section>

      <footer>
        <div><a className="brand" href="#top">Vow <i>&amp;</i> Vibrato</a><p>Beautiful music, thoughtfully chosen.</p></div>
        <p>Recording previews provided by Apple Music. Availability may vary by region.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
