/*
 *     Copyright 2011-2020 Couchbase, Inc.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
const pkg = require('../../package.json');
export class Constants {
  public static extensionID = "vscode-couchbase";
  public static connectionKeys = "cluster.connections";
  public static notebookType = "couchbase-query-notebook";
  public static capellaUrlPostfix = "cloud.couchbase.com";
  public static prefixSecureURL = "couchbases://";
  public static prefixURL = "couchbase://";
  public static extensionVersion = pkg.version;
}
