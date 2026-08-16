"use client";

import { useMemo, useState } from "react";
import { recordings, recordingKey } from "./recordings";
import { songs, type Category } from "./songs";

const filters: ("All" | Category)[] = ["All", "Classical", "Pop", "Entrance", "Recessional"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return songs.filter((song) =>
      (filter === "All" || song.category === filter) &&
      (!needle || `${song.title} ${song.composer}`.toLowerCase().includes(needle)),
    );
  }, [query, filter]);

  function loadPreview(songId: string) {
    if (active === songId) {
      setActive(null);
      return;
    }
    setActive(songId);
  }

  return (
    <main>
      <header className="hero" id="top">
        <nav>
          <a className="brand" href="#top">Vow <i>&amp;</i> Vibrato</a>
          <span>{songs.length} selections · verified string-first videos</span>
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
          <p>Select any title to watch a reviewed YouTube performance. String duos, trios, and quartets are used whenever a credible match is available.</p>
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
            const preview = recordings[recordingKey(song.title, song.composer)];
            const isActive = active === song.id;
            return <article className={`song ${isActive ? "expanded" : ""}`} key={song.id}>
              <div className="song-row">
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <button className="play" onClick={() => loadPreview(song.id)} aria-label={`${isActive ? "Close" : "Listen to"} ${song.title}`}>{isActive ? "×" : "▶"}</button>
                <div className="song-info"><h3>{song.title}</h3><p>{song.composer}</p></div>
                <span className={`tag ${song.category.toLowerCase()}`}>{song.category}</span>
                <span className="ensemble">Strings preferred <i>◌</i></span>
              </div>
              {isActive && <div className="inline-player">
                {preview ? <>
                  <div className="recording"><span>{preview.kind}</span><strong>{preview.title}</strong><p>{preview.channel}</p><a href={`https://www.youtube.com/watch?v=${preview.videoId}`} target="_blank" rel="noreferrer">Open on YouTube ↗</a></div>
                  <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${preview.videoId}?autoplay=1&rel=0`} title={`${preview.title} performed by ${preview.channel}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
                </> : <div className="no-preview"><strong>No verified YouTube performance found</strong><p>This published arrangement could not be matched confidently, so no substitute recording is shown.</p></div>}
              </div>}
            </article>;
          })}
          {filtered.length === 0 && <div className="empty"><span>𝄽</span><h3>No selections found</h3><p>Try a different title, composer, or collection.</p><button onClick={() => { setQuery(""); setFilter("All"); }}>Clear search</button></div>}
        </div>
      </section>

      <footer>
        <div><a className="brand" href="#top">Vow <i>&amp;</i> Vibrato</a><p>Beautiful music, thoughtfully chosen.</p></div>
        <p>Performances are embedded from YouTube and may be subject to regional availability.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
