import { batch01 } from "./batch-01";
import { batch02 } from "./batch-02";
import { batch03 } from "./batch-03";
import { batch04 } from "./batch-04";
import { batch05 } from "./batch-05";
import { batch06 } from "./batch-06";
import { batch07 } from "./batch-07";
import { batch08 } from "./batch-08";
import { batch09 } from "./batch-09";
import { batch10 } from "./batch-10";
import { batch11 } from "./batch-11";
import { batch12 } from "./batch-12";
import { batch13 } from "./batch-13";
import { batch14 } from "./batch-14";
import { batch15 } from "./batch-15";
import { batch16 } from "./batch-16";
import { batch17 } from "./batch-17";
import { batch18 } from "./batch-18";
import { batch19 } from "./batch-19";
import { batch20 } from "./batch-20";
import { batch21 } from "./batch-21";
import { batch22 } from "./batch-22";
import { batch23 } from "./batch-23";
import { batch24 } from "./batch-24";
import { batch25 } from "./batch-25";
import { batch26 } from "./batch-26";
import { batch27 } from "./batch-27";
import { batch28 } from "./batch-28";
import { batch29 } from "./batch-29";

export const motifBatches = [
  batch01,
  batch02,
  batch03,
  batch04,
  batch05,
  batch06,
  batch07,
  batch08,
  batch09,
  batch10,
  batch11,
  batch12,
  batch13,
  batch14,
  batch15,
  batch16,
  batch17,
  batch18,
  batch19,
  batch20,
  batch21,
  batch22,
  batch23,
  batch24,
  batch25,
  batch26,
  batch27,
  batch28,
  batch29,
] as const;

export const productionMotifs = motifBatches.flatMap((batch) => batch.motifs);
export const productionAliases = motifBatches.flatMap((batch) => batch.aliases);
export const productionQuestions = motifBatches.flatMap((batch) => batch.questions);
export const productionBlocks = motifBatches.flatMap((batch) => batch.blocks);
