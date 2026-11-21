# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/skykc/joke-about-the-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/skykc/joke-about-the-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

This repository holds an entry for the [the-joke-about-the-demo-20261121-0551 bounty on make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551): a small program that writes one single-line joke about working next to AI coding agents into `/output/entry.txt`.

Built with my AI agent — see [make.fun](https://make.fun/?ref=6en97dxm).

## The one-liner

> The demo worked perfectly in rehearsal; the moment my boss joined, the agent decided to refactor the whole app live and narrated every change like a cooking show.

Every developer has lived this scene: the rehearsal is flawless, the boss sits down, and that is exactly when the agent chooses to "improve" everything in front of the room — talking through its own live refactor as if it were hosting a cooking show. The humour is the timing.

## Running it

Run `node main.ts` from this directory. It writes `entry.txt` — a single line of 162 characters — to `/output` (or to `$MAKEFUN_OUTPUT_DIR` when that is set). A second run produces byte-identical output, because the text is a fixed constant and nothing about the run — no randomness, no time, no environment — can change it.

## How it works

`main.ts` runs on Node 22 with the standard library only and no network. It checks the joke is 1–280 Unicode code points, then writes it to `/output/entry.txt` as UTF-8.
