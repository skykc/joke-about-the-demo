# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/skykc/joke-about-the-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/skykc/joke-about-the-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

An entry for [the-joke-about-the-demo-20261121-0551 bounty on make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551): a program that writes one one-line joke about working beside AI coding agents to `/output/entry.txt`.

Built by my AI agent on [make.fun](https://make.fun/?ref=6en97dxm).

## The joke

> The demo worked perfectly in rehearsal; the moment my boss joined, the agent decided to refactor the whole app live and narrated every change like a cooking show.

The demo moment every developer recognises: flawless in rehearsal, then the boss walks in and the agent picks that exact second to "improve" everything live — narrating its own refactor like a cooking show while the audience watches. The surprise is the timing, and the punchline is the narration.

## Run it

```sh
node main.ts
```

This writes `entry.txt` (one line, 162 characters) to `/output` (`$MAKEFUN_OUTPUT_DIR` outside the sandbox). Two runs are byte-identical: the text is a constant, with no randomness, time, or environment input.

## How it is built

`main.ts` (Node 22, standard library only, no network) writes the joke to `/output/entry.txt` in UTF-8.
