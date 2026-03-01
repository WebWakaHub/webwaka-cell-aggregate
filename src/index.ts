/**
 * Aggregate — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { RecordStoreOrchestrator } from "@webwaka/organelle-record-store";
import { EventDispatcherOrchestrator } from "@webwaka/organelle-event-dispatcher";

export { RecordStoreOrchestrator } from '@webwaka/organelle-record-store';
export { EventDispatcherOrchestrator } from '@webwaka/organelle-event-dispatcher';

/**
 * Aggregate Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class AggregateComposition {
  private recordStoreOrchestrator: RecordStoreOrchestrator;
  private eventDispatcherOrchestrator: EventDispatcherOrchestrator;

  constructor() {
    this.recordStoreOrchestrator = new RecordStoreOrchestrator();
    this.eventDispatcherOrchestrator = new EventDispatcherOrchestrator();
  }
}

export * from "./types";
