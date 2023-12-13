import * as core from '@actions/core'
import { RunScriptStepArgs } from 'hooklib/lib'
import { containerExecStep } from '../dockerCommands'

export async function runScriptStep(
  args: RunScriptStepArgs,
  state
): Promise<void> {

  core.info(`HOOK: runScriptStep: ${JSON.stringify(args)} state: ${JSON.stringify(state)}`)

  await containerExecStep(args, state.container)
}
