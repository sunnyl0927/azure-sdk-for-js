// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to detect anomaly points on entire series.
 *
 * @summary detects anomaly points on entire series.
 * @azsdk-weight 40
 */

import {
  AnomalyDetectorClient,
  DetectRequest,
  DetectEntireResponse,
  TimeSeriesPoint,
  KnownTimeGranularity
} from "@azure/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";

import * as fs from "fs";
import { parse } from "csv-parse/lib/sync";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set this environment variables or edit the following values
const apiKey = process.env["API_KEY"] || "";
const endpoint = process.env["ENDPOINT"] || "";
const timeSeriesDataPath = "../example-data/request-data.csv";

function read_series_from_file(path: string): Array<TimeSeriesPoint> {
  let result = Array<TimeSeriesPoint>();
  let input = fs.readFileSync(path).toString();
  let parsed = parse(input, { skip_empty_lines: true });
  parsed.forEach(function(e: Array<string>) {
    result.push({ timestamp: new Date(e[0]), value: Number(e[1]) });
  });
  return result;
}

export async function main() {
  // create client
  const client = new AnomalyDetectorClient(endpoint, new AzureKeyCredential(apiKey));

  // construct request
  const request: DetectRequest = {
    series: read_series_from_file(timeSeriesDataPath),
    granularity: KnownTimeGranularity.daily
  };

  // get entire detect result
  const result: DetectEntireResponse = await client.detectEntireSeries(request);

  if (
    result.isAnomaly.some(function(anomaly) {
      return anomaly === true;
    })
  ) {
    console.log("Anomalies were detected from the series at index:");
    result.isAnomaly.forEach(function(anomaly, index) {
      if (anomaly === true) {
        console.log(index);
      }
    });
  } else {
    console.log("There is no anomaly detected from the series.");
  }
  // output:
  // Anomalies were detected from the series at index:
  // 3
  // 18
  // 21
  // 22
  // 23
  // 24
  // 25
  // 28
  // 29
  // 30
  // 31
  // 32
  // 35
  // 44
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
