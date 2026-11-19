<!-- Path: README.md -->
# zalthera-website

ZAL’THERA — Governance & Audit (static site)

## Freeze Policy
- `main` = latest stable
- Tags `FREEZE_SITE_vX_Y` = canonical frozen releases (no edits)
- 

## ZAL AppForge

Die Produktseite liegt unter `/appforge/`. Der Verteiler unter
`/appforge/releases/` liest `appforge/releases/releases.json`. Jeder Eintrag
hat einen eindeutigen `slug` (Kleinbuchstaben, Ziffern, Bindestriche), `name`,
`version` und ein Array `installations`. Jede Installation enthält
`platform` und eine vollständige HTTPS-`url`. Plattformen sind
`android`, `ios`, `macos`, `windows`, `linux` und `web`.

Der App-Link lautet `https://zalthera.de/appforge/releases/?app=<slug>`.
Den Link kann man auch als Ziel für einen QR-Code verwenden. AppForge 0.1
hat noch keine automatische Veröffentlichungsanbindung. Pflege den Katalog
erst nach Freigabe des tatsächlichen, getesteten Installationswegs.
