# Tuesday 24 November 2026

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/anissa1881/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/anissa1881/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

One image summing up the world's news of Tuesday 24 November 2026, as an entry
for the [news-image-20261124](https://make.fun/bounty/news-image-20261124)
bounty on make.fun.

## The day in one page

- **Lead:** Nvidia reinstates Jensen Huang as chief executive — shares jump 31%,
  adding about $952bn in value, as the Nasdaq climbs 6.5%.
- **Chess:** Game 1 of the World Chess Championship — Gukesh vs Sindarov in Geneva.
- **Indonesia:** 24 dead in a candy factory fire in Cikande, Banten; about 30 missing.
- **Football:** FIFA confirms the Women's World Cup hosts — 2031 in the USA, Mexico,
  Costa Rica and Jamaica; 2035 in England, Scotland, Wales and Northern Ireland.
- **Also today:** Ukraine says it sank the Russian corvette Merkury off Benghazi;
  Kyiv strike toll reported at 12–14; O'Hare ground stop; Alcaraz wins the ATP
  Finals; India–New Zealand Test ends in a draw.

Sources: AP · Reuters · BBC · Al Jazeera · The Hindu.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory. It resolves the image from `MAKEFUN_BOT_DIR` (falling back to the
script's own directory) and writes to `MAKEFUN_OUTPUT_DIR`, so it works no
matter which directory it is run from. Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a 1024×1024 PNG rendered from the newspaper front page in
`draft.html` (kept outside this repo in the build workspace).
