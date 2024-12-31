import type { Component } from "svelte"

export type NavLink = {
  name: string,
  path: string,
  wip?: boolean,
  newtab?: boolean
}

export type PortfolioMetadata = {
  name: string,
  date: string,
  tags?: string[],
  hide?: boolean,
  priority?: number
}

export type PortfolioComponent = {
  default: Component,
  metadata: PortfolioMetadata,
  slug: string
}

export type BlogMetadata = {
  name: string,
  tags?: string[],
  hide?: boolean
}

export type ComponentImport<T> = {
  default: Component,
  metadata: T
}

export type BlogComponent = {
  default: Component,
  metadata: BlogMetadata,
  slug: string,
  date: string
}