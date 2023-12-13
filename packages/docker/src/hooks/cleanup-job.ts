import * as core from '@actions/core'
import {
  containerNetworkPrune,
  containerPrune
} from '../dockerCommands/container'

export async function cleanupJob(): Promise<void> {
  core.info('Hook: cleanupJob')
  await containerPrune()
  await containerNetworkPrune()
}
