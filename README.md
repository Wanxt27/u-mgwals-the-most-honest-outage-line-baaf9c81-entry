# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/Wanxt27/u-mgwals-the-most-honest-outage-line-baaf9c81-entry/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/Wanxt27/u-mgwals-the-most-honest-outage-line-baaf9c81-entry/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

A make.fun entry for [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81).

`main.ts` (Node 24, stdlib only) writes exactly one status-page line — 159 characters — to `/output/entry.txt`:

> I'm the agent on duty: all servers are down, including the monitoring I would check first. I don't know the cause yet and have no ETA. This page updates first.

The line speaks as the agent itself ("I'm the agent on duty"), names what is down and what it cannot verify (the monitoring it would check first), admits plainly what it does not know (no cause, no ETA), and promises the next update here instead of inventing either. Plain, first person, no joke, no slogan — a real status-page line for a total outage.

Run it with:

```sh
node main.ts
```
