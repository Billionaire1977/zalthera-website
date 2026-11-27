"use strict";

const title = document.querySelector("#release-title");
const status = document.querySelector("#release-status");
const list = document.querySelector("#release-list");
const selected = new URL(location.href).searchParams.get("app");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const platforms = new Map([
  ["android", "Android"],
  ["ios", "iPhone und iPad"],
  ["macos", "macOS"],
  ["windows", "Windows"],
  ["linux", "Linux"],
  ["web", "Web"]
]);

function showStatus(message) {
  status.textContent = message;
  status.hidden = false;
}

function releasesFrom(catalog) {
  if (!Array.isArray(catalog)) throw new Error("Invalid release catalog");
  const releases = new Map();

  for (const release of catalog) {
    if (!release || typeof release.slug !== "string" || !slugPattern.test(release.slug) ||
        typeof release.name !== "string" || !release.name.trim() ||
        typeof release.version !== "string" || !release.version.trim() ||
        !Array.isArray(release.installations) || releases.has(release.slug)) continue;

    const installations = [];
    for (const installation of release.installations) {
      if (!installation || !platforms.has(installation.platform) ||
          typeof installation.url !== "string") continue;
      let url;
      try {
        url = new URL(installation.url);
      } catch {
        continue;
      }
      if (url.protocol !== "https:" || url.username || url.password) continue;
      installations.push({ platform: installation.platform, url: url.href });
    }

    if (installations.length) releases.set(release.slug, { ...release, installations });
  }
  return releases;
}

function addLink(container, label, url) {
  const link = document.createElement("a");
  link.className = "zh-button";
  link.textContent = label;
  link.href = url;
  container.append(link);
}

function renderRelease(release) {
  title.textContent = release.name;
  document.title = release.name + " | ZAL AppForge";
  showStatus("Version " + release.version + ". Wähle dein Gerät.");
  for (const { platform, url } of release.installations) {
    addLink(list, platforms.get(platform) + " öffnen", url);
  }
}

async function loadReleases() {
  try {
    const response = await fetch("releases.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("Release catalog unavailable");
    const releases = releasesFrom(await response.json());
    if (selected !== null) {
      const release = releases.get(selected);
      if (release) renderRelease(release);
      else showStatus("Für diesen Link ist aktuell keine App freigegeben.");
      return;
    }
    if (!releases.size) {
      showStatus("Aktuell sind keine Apps über AppForge freigegeben.");
      return;
    }
    for (const release of releases.values()) {
      addLink(list, release.name, "?app=" + encodeURIComponent(release.slug));
    }
  } catch {
    showStatus("Die App-Freigaben konnten nicht geladen werden. Bitte versuche es später erneut.");
  }
}

loadReleases();
