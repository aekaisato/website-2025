import type { Component } from "svelte"

export type NavLink = {
  name: string,
  path: string,
  wip?: boolean
}

export type PortfolioMetadata = {
  name: string,
  date: string,
  tags: string[],
  hide?: boolean,
  priority?: number
}

export type PortfolioComponent = {
  default: Component,
  metadata: PortfolioMetadata,
  slug: string
}