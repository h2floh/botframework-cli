botframework-cli
================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@microsoft/botframework-cli)](https://www.npmjs.com/package/@microsoft/botframework-cli)
[![Downloads](https://img.shields.io/npm/dt/@microsoft/botframework-cli)](https://github.com/microsoft/botframework-cli)
[![License](https://img.shields.io/npm/l/@microsoft/botframework-cli)](https://github.com/microsoft/botframework-cli/blob/master/packages/cli/package.json)

# Dependency
Node v12


# Usage

```sh-session
$ npm install -g @microsoft/botframework-cli

```

# Commands
<!-- commands -->
* [`bf chatdown`](#bf-chatdown)
* [`bf chatdown:convert`](#bf-chatdownconvert)
* [`bf config`](#bf-config)
* [`bf config:remove`](#bf-configremove)
* [`bf config:set`](#bf-configset)
* [`bf config:set:luis`](#bf-configsetluis)
* [`bf config:set:qnamaker`](#bf-configsetqnamaker)
* [`bf config:set:telemetry`](#bf-configsettelemetry)
* [`bf config:show`](#bf-configshow)
* [`bf config:show:luis`](#bf-configshowluis)
* [`bf config:show:qnamaker`](#bf-configshowqnamaker)
* [`bf config:show:telemetry`](#bf-configshowtelemetry)
* [`bf dialog`](#bf-dialog)
* [`bf dialog:merge PATTERNS`](#bf-dialogmerge-patterns)
* [`bf dialog:verify PATTERNS`](#bf-dialogverify-patterns)
* [`bf help [COMMAND]`](#bf-help-command)
* [`bf lg`](#bf-lg)
* [`bf lg:analyze`](#bf-lganalyze)
* [`bf lg:expand`](#bf-lgexpand)
* [`bf lg:translate`](#bf-lgtranslate)
* [`bf lg:verify`](#bf-lgverify)
* [`bf luis`](#bf-luis)
* [`bf luis:application:assignazureaccount`](#bf-luisapplicationassignazureaccount)
* [`bf luis:application:create`](#bf-luisapplicationcreate)
* [`bf luis:application:delete`](#bf-luisapplicationdelete)
* [`bf luis:application:import`](#bf-luisapplicationimport)
* [`bf luis:application:list`](#bf-luisapplicationlist)
* [`bf luis:application:publish`](#bf-luisapplicationpublish)
* [`bf luis:application:query`](#bf-luisapplicationquery)
* [`bf luis:application:rename`](#bf-luisapplicationrename)
* [`bf luis:application:show`](#bf-luisapplicationshow)
* [`bf luis:build`](#bf-luisbuild)
* [`bf luis:convert`](#bf-luisconvert)
* [`bf luis:cross-train`](#bf-luiscross-train)
* [`bf luis:endpoints:list`](#bf-luisendpointslist)
* [`bf luis:generate:cs`](#bf-luisgeneratecs)
* [`bf luis:generate:ts`](#bf-luisgeneratets)
* [`bf luis:test`](#bf-luistest)
* [`bf luis:train:run`](#bf-luistrainrun)
* [`bf luis:train:show`](#bf-luistrainshow)
* [`bf luis:translate`](#bf-luistranslate)
* [`bf luis:version:clone`](#bf-luisversionclone)
* [`bf luis:version:delete`](#bf-luisversiondelete)
* [`bf luis:version:export`](#bf-luisversionexport)
* [`bf luis:version:import`](#bf-luisversionimport)
* [`bf luis:version:list`](#bf-luisversionlist)
* [`bf luis:version:rename`](#bf-luisversionrename)
* [`bf orchestrator`](#bf-orchestrator)
* [`bf orchestrator:add`](#bf-orchestratoradd)
* [`bf orchestrator:basemodel:get`](#bf-orchestratorbasemodelget)
* [`bf orchestrator:basemodel:list`](#bf-orchestratorbasemodellist)
* [`bf orchestrator:build`](#bf-orchestratorbuild)
* [`bf orchestrator:create`](#bf-orchestratorcreate)
* [`bf orchestrator:interactive`](#bf-orchestratorinteractive)
* [`bf orchestrator:query`](#bf-orchestratorquery)
* [`bf orchestrator:test`](#bf-orchestratortest)
* [`bf plugins`](#bf-plugins)
* [`bf plugins:install PLUGIN`](#bf-pluginsinstall-plugin)
* [`bf plugins:link PLUGIN`](#bf-pluginslink-plugin)
* [`bf plugins:list`](#bf-pluginslist)
* [`bf plugins:uninstall [PLUGIN]`](#bf-pluginsuninstall-plugin)
* [`bf qnamaker`](#bf-qnamaker)
* [`bf qnamaker:alterations`](#bf-qnamakeralterations)
* [`bf qnamaker:alterations:list`](#bf-qnamakeralterationslist)
* [`bf qnamaker:alterations:replace`](#bf-qnamakeralterationsreplace)
* [`bf qnamaker:build`](#bf-qnamakerbuild)
* [`bf qnamaker:convert`](#bf-qnamakerconvert)
* [`bf qnamaker:cross-train`](#bf-qnamakercross-train)
* [`bf qnamaker:endpointkeys`](#bf-qnamakerendpointkeys)
* [`bf qnamaker:endpointkeys:list`](#bf-qnamakerendpointkeyslist)
* [`bf qnamaker:endpointkeys:refresh`](#bf-qnamakerendpointkeysrefresh)
* [`bf qnamaker:endpointsettings`](#bf-qnamakerendpointsettings)
* [`bf qnamaker:endpointsettings:get`](#bf-qnamakerendpointsettingsget)
* [`bf qnamaker:endpointsettings:update`](#bf-qnamakerendpointsettingsupdate)
* [`bf qnamaker:init`](#bf-qnamakerinit)
* [`bf qnamaker:kb`](#bf-qnamakerkb)
* [`bf qnamaker:kb:create`](#bf-qnamakerkbcreate)
* [`bf qnamaker:kb:delete`](#bf-qnamakerkbdelete)
* [`bf qnamaker:kb:export`](#bf-qnamakerkbexport)
* [`bf qnamaker:kb:get`](#bf-qnamakerkbget)
* [`bf qnamaker:kb:list`](#bf-qnamakerkblist)
* [`bf qnamaker:kb:publish`](#bf-qnamakerkbpublish)
* [`bf qnamaker:kb:replace`](#bf-qnamakerkbreplace)
* [`bf qnamaker:kb:update`](#bf-qnamakerkbupdate)
* [`bf qnamaker:operationdetails`](#bf-qnamakeroperationdetails)
* [`bf qnamaker:operationdetails:get`](#bf-qnamakeroperationdetailsget)
* [`bf qnamaker:query`](#bf-qnamakerquery)
* [`bf qnamaker:train`](#bf-qnamakertrain)
* [`bf qnamaker:translate`](#bf-qnamakertranslate)

## `bf chatdown`

Converts chat dialog files in <filename>.chat format into transcript files. Writes corresponding <filename>.transcript for each .chat file.

```
USAGE
  $ bf chatdown

OPTIONS
  -h, --help  Chatdown command help
```

_See code: [@microsoft/bf-chatdown](https://github.com/microsoft/botframework-cli/tree/master/packages/chatdown/src/commands/chatdown/index.ts)_

## `bf chatdown:convert`

Converts chat dialog files in <filename>.chat format into transcript files. Writes corresponding <filename>.transcript for each .chat file.

```
USAGE
  $ bf chatdown:convert

OPTIONS
  -f, --force    If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help     Chatdown command help

  -i, --in=in    The path of the chat file or directory to be parsed. A glob expression may be passed containing chat
                 files to be processed all at once, ex. ./**/*.chat. If flag is omitted, stdin will be used. If an
                 output directory is not present (-o), it will default the output to the current working directory.

  -o, --out=out  Path to the directory where the output of the multiple chat file processing (-o) will be placed.

  -p, --prefix   Prefix stdout with package name.

  -s, --stamp    Use static timestamps when generating timestamps on activities.

EXAMPLE

     $ bf chatdown
     $ bf chatdown --in=./path/to/file/sample.chat
     $ bf chatdown --in ./test/utils/*.sample.chat -o ./
     $ (echo user=Joe && [ConversationUpdate=MembersAdded=Joe]) | bf chatdown --static
```

_See code: [@microsoft/bf-chatdown](https://github.com/microsoft/botframework-cli/tree/master/packages/chatdown/src/commands/chatdown/convert.ts)_

## `bf config`

Configure various settings within the cli.

```
USAGE
  $ bf config

OPTIONS
  -h, --help  config help
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/index.ts)_

## `bf config:remove`

Removes the specified key from the config file

```
USAGE
  $ bf config:remove

OPTIONS
  -h, --help     config:remove help
  -k, --key=key  (required) Name of the key to remove
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/remove.ts)_

## `bf config:set`

Adds the specified key and value to the config file

```
USAGE
  $ bf config:set

OPTIONS
  -h, --help         config:set help
  -k, --key=key      (required) Name of the key to add or override
  -v, --value=value  (required) Value associated with the specified key
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/set.ts)_

## `bf config:set:luis`

Stores default LUIS application values in global config.

```
USAGE
  $ bf config:set:luis

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      LUIS application Id
  --armToken=armToken                User`s ARM token used to validate azure accounts information)
  --authoringKey=authoringKey        LUIS cognitive services authoring key (aka Ocp-Apim-Subscription-Key).
  --endpoint=endpoint                LUIS application endpoint hostname, ex: <region>.api.cognitive.microsoft.com
  --subscriptionKey=subscriptionKey  LUIS cognitive services subscription key (aka Ocp-Apim-Subscription-Key)
  --versionId=versionId              LUIS version Id

EXAMPLE

       $ bf config:set:luis --appId {APPLICATION_ID} --authoringKey {AUTHORING_KEY} --subscriptionKey {SUBSCRIPTION_KEY} 
  --versionId {VERSION_ID} --endpoint {ENDPOINT}
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/set/luis.ts)_

## `bf config:set:qnamaker`

Set the QnAMaker config data

```
USAGE
  $ bf config:set:qnamaker

OPTIONS
  -h, --help                         config:set:qnamaker help
  --endpointKey=endpointKey          QnAMaker endpointKey to be set
  --hostname=hostname                QnAMaker hostname to be set
  --kbId=kbId                        QnAMaker kbId to be set
  --subscriptionKey=subscriptionKey  QnAMaker subscriptionkey to be set

EXAMPLE

     {
       "qnamaker_kbId": "3bda64af-dddd-dddd-dddd-021906b093b1",
       "qnamaker_subscriptionKey": "nnnnnnnnnnnnnnnnnnnnnnnnn",
       "qnamaker_endpointKey": "6b5ecf9c-kkkk-kkkk-kkkk-761489817e5f",
       "qnamaker_hostname": "https://{qnaservice-hostname}.azurewebsites.net"
     }
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/set/qnamaker.ts)_

## `bf config:set:telemetry`

Enable or disable anonymous data collection to improve the products. (Command group calls and flags usage)

```
USAGE
  $ bf config:set:telemetry

OPTIONS
  -d, --disable  Disable tlemetry
  -e, --enable   Enable tlemetry
  -h, --help     config:set:telemetry help
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/set/telemetry.ts)_

## `bf config:show`

Displays the config file

```
USAGE
  $ bf config:show

OPTIONS
  -h, --help     config:show help
  -k, --key=key  Shows specific key value
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/show.ts)_

## `bf config:show:luis`

Display LUIS settings

```
USAGE
  $ bf config:show:luis

OPTIONS
  -h, --help  config:show:luis help
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/show/luis.ts)_

## `bf config:show:qnamaker`

Display QnAMaker settings

```
USAGE
  $ bf config:show:qnamaker

OPTIONS
  -h, --help  config:show:qnamaker help
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/show/qnamaker.ts)_

## `bf config:show:telemetry`

Display telemetry settings

```
USAGE
  $ bf config:show:telemetry

OPTIONS
  -h, --help  config:show:telemetry help
```

_See code: [@microsoft/bf-cli-config](https://github.com/microsoft/botframework-cli/tree/master/packages/config/src/commands/config/show/telemetry.ts)_

## `bf dialog`

Dialog related commands for working with .schema and .dialog files.

```
USAGE
  $ bf dialog

OPTIONS
  -h, --help  Dialog command help
```

_See code: [@microsoft/bf-dialog](https://github.com/microsoft/botframework-cli/tree/master/packages/dialog/src/commands/dialog/index.ts)_

## `bf dialog:merge PATTERNS`

Merge `<kind>.schema` and `<kind>[.<locale>].uischema` definitions from a project and its dependencies into a single .schema for describing .dialog files and a per locale .uischema for describing how Composer shows them.  If a dependent package has an "exported" directory it is copied to /<package> in the --imports directory. You can make use of negative patterns like !**/generated/** to exclude particular directories or files, although some directories like bin, obj and node_modules are automatically excluded.

```
USAGE
  $ bf dialog:merge PATTERNS

ARGUMENTS
  PATTERNS  Any number of glob regex patterns to match .csproj, .nuspec or package.json files.

OPTIONS
  -c, --checkOnly        Check and do not write files.
  -h, --help             show CLI help

  -o, --output=output    Output path and optional filename for merged .schema and .uischema.  Defaults to first project
                         name.

  -s, --schema=schema    Path to merged .schema file to use if merging .uischema only.

  -v, --verbose          Show verbose logging of files as they are processed.

  --extension=extension  [default: .dialog,.lg,.lu,.schema,.qna,.uischema] Extension to include as a resource.

  --imports=imports      Output path for imported assets.  Defaults to the directory of --out with an imported
                         directory.

EXAMPLES
  $ bf dialog:merge myProject.csproj plugins/*.nuspec
  $ bf dialog:merge package.json -o app.schema
```

_See code: [@microsoft/bf-dialog](https://github.com/microsoft/botframework-cli/tree/master/packages/dialog/src/commands/dialog/merge.ts)_

## `bf dialog:verify PATTERNS`

Verify .dialog files match their app.schema.

```
USAGE
  $ bf dialog:verify PATTERNS

ARGUMENTS
  PATTERNS  Any number of glob regex patterns to match .dialog files.

OPTIONS
  -h, --help           show CLI help
  -s, --schema=schema  Default schema to use if no $schema in dialog file.
  -v, --verbose        Show verbose output
```

_See code: [@microsoft/bf-dialog](https://github.com/microsoft/botframework-cli/tree/master/packages/dialog/src/commands/dialog/verify.ts)_

## `bf help [COMMAND]`

display help for bf

```
USAGE
  $ bf help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `bf lg`

Parse, collate, expand and translate lg files.

```
USAGE
  $ bf lg

OPTIONS
  -h, --help  lg command help
```

_See code: [@microsoft/bf-lg-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/lg/src/commands/lg/index.ts)_

## `bf lg:analyze`

Analyze templates in .lg files to show all the places where a template is used

```
USAGE
  $ bf lg:analyze

OPTIONS
  -f, --force    If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help     lg:analyze help
  -i, --in=in    (required) LG File or folder that contains .lg file(s)
  -o, --out=out  Output file or folder name. If not specified stdout will be used as output
  -r, --recurse  Consider sub-folders to find .lg file(s)
```

_See code: [@microsoft/bf-lg-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/lg/src/commands/lg/analyze.ts)_

## `bf lg:expand`

Expand one or all templates in .lg file(s). Expand an inline expression.

```
USAGE
  $ bf lg:expand

OPTIONS
  -f, --force              If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help               lg:expand help
  -i, --in=in              (required) Folder that contains .lg file.
  -o, --out=out            Output file or folder name. If not specified stdout will be used as output
  -r, --recurse            Consider sub-folders to find .lg file(s)
  --all                    When set, all templates in the .lg file be expanded.
  --expression=expression  Inline expression provided as a string to evaluate.
  --interactive            Interactively prompt for all missing entity value references required for expansion.
  --template=template      Name of the template to expand. Template names with spaces must be enclosed in quotes.
  --testInput=testInput    Path to a JSON file containing test input for all variable references.
```

_See code: [@microsoft/bf-lg-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/lg/src/commands/lg/expand.ts)_

## `bf lg:translate`

Machine translate .lg files using Microsoft Translator Text API.

```
USAGE
  $ bf lg:translate

OPTIONS
  -f, --force                  If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help                   lg:translate help
  -i, --in=in                  (required) Folder that contains .lg file.
  -o, --out=out                Output file or folder name. If not specified stdout will be used as output
  -r, --recurse                Consider sub-folders to find .lg file(s)
  --region=region              (required) The sub region.
  --srclang=srclang            Source lang code. Auto detect if missing.
  --tgtlang=tgtlang            (required) Comma separated list of target languages.
  --translate_comments         Machine translate all comments found in .lg file
  --translate_link_text        Machine translate link description in .lg file
  --translatekey=translatekey  (required) Machine translation endpoint key.
```

_See code: [@microsoft/bf-lg-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/lg/src/commands/lg/translate.ts)_

## `bf lg:verify`

Verify .lg file(s) and collate them into a single file.

```
USAGE
  $ bf lg:verify

OPTIONS
  -f, --force    If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help     lg:verify help
  -i, --in=in    (required) Folder that contains .lg file.
  -o, --out=out  Output file or folder name. If not specified stdout will be used as output
  -r, --recurse  Considers sub-folders to find .lg file(s)
```

_See code: [@microsoft/bf-lg-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/lg/src/commands/lg/verify.ts)_

## `bf luis`

Manages LUIS assets on service and/or locally.

```
USAGE
  $ bf luis

OPTIONS
  -h, --help  LUIS command help
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/index.ts)_

## `bf luis:application:assignazureaccount`

Assign a LUIS azure accounts to an application

```
USAGE
  $ bf luis:application:assignazureaccount

OPTIONS
  -h, --help                                 show CLI help
  --accountName=accountName                  (required) Account name

  --appId=appId                              (required) LUIS application Id (defaults to config:set:luis --appId
                                             {APPLICATION_ID})

  --armToken=armToken                        (required) User`s ARM token used to validate azure accounts information
                                             (default: config:set:luis --armToken {ARM_TOKEN})

  --azureSubscriptionId=azureSubscriptionId  (required) Azure Subscription Id

  --endpoint=endpoint                        LUIS endpoint hostname

  --json                                     Display output as JSON

  --resourceGroup=resourceGroup              (required) Resource Group

  --subscriptionKey=subscriptionKey          (required) LUIS cognitive services subscription key (default:
                                             config:set:luis --subscriptionKey {SUBSCRIPTION_KEY})
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/assignazureaccount.ts)_

## `bf luis:application:create`

Creates a new LUIS application

```
USAGE
  $ bf luis:application:create

OPTIONS
  -h, --help                           show CLI help
  --culture=culture                    Specify culture language (default: en-us)
  --description=description            Description of LUIS application
  --endpoint=endpoint                  LUIS endpoint hostname
  --json                               Display output as JSON
  --name=name                          (required) Name of LUIS application
  --save                               Save configuration settings from imported app (appId & endpoint)

  --subscriptionKey=subscriptionKey    (required) LUIS cognitive services subscription key (default:
                                       config:LUIS:subscriptionKey)

  --tokenizerVersion=tokenizerVersion  Version specifies how sentences are tokenized (optional). See also:
                                       https://aka.ms/luistokens

  --versionId=versionId                (required) LUIS version Id. (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:application:create --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --name {NAME} --culture 
  {CULTURE}
       --domain {DOMAIN} --description {DESCRIPTION} --versionId {INITIAL_VERSION_ID} --usageScenario {USAGE_SCENARIO}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/create.ts)_

## `bf luis:application:delete`

Deletes a LUIS application

```
USAGE
  $ bf luis:application:delete

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname
  --force                            Force delete with no confirmation
  --json                             Display output as JSON

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

EXAMPLE

       $ bf luis:application:delete --appId {APP_ID} --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/delete.ts)_

## `bf luis:application:import`

Imports LUIS application from JSON or LU content.

```
USAGE
  $ bf luis:application:import

OPTIONS
  -h, --help                         show CLI help

  -i, --in=in                        (required) File path containing LUIS application contents, uses STDIN if not
                                     specified

  --endpoint=endpoint                (required) LUIS endpoint hostname

  --json                             Display output as JSON

  --name=name                        LUIS application name (optional)

  --save                             Save configuration settings from imported app (appId, subscriptionKey & endpoint)

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default: config
                                     subscriptionKey)

EXAMPLE

       $ bf luis:application:import --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --name {NAME} --in 
  {PATH_TO_JSON}
       $ echo {SERIALIZED_JSON} | bf luis:application:import --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} 
  --name {NAME}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/import.ts)_

## `bf luis:application:list`

Lists all applications on LUIS service.

```
USAGE
  $ bf luis:application:list

OPTIONS
  -f, --force                        If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help                         show CLI help

  -o, --out=out                      Output results to specified file in JSON format, otherwise prints to STDOUT
                                     (optional)

  --endpoint=endpoint                LUIS endpoint hostname

  --skip=skip                        Number of entries to skip. Default: 0 (no skips)

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --take=take                        Number of etnries to return. Maximum page size is 500. Default: 100

EXAMPLE

       $ bf luis:application:list --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --take 3
       $ bf luis:application:list --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --out {PATH_TO_JSON_FILE}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/list.ts)_

## `bf luis:application:publish`

Publishes application's version

```
USAGE
  $ bf luis:application:publish

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --direct                           Available only in direct version query. Do not publish to staging or production
  --endpoint=endpoint                LUIS endpoint hostname
  --staging                          Publishes application version to Staging slot, otherwise publish to production

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              (required) Version to publish (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:application:publish --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --versionId 
  {INITIAL_VERSION_ID} --appId {APP_ID} --staging {BOOLEAN}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/publish.ts)_

## `bf luis:application:query`

Queries application for intent predictions

```
USAGE
  $ bf luis:application:query

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname
  --log                              Logs query operation on service (default: true)
  --query=query                      (required) Query string to predict
  --staging                          Presence of flag targets the staging app, if no flag passed defaults to production

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --timezoneOffset=timezoneOffset    Timezone offset for the location of the request in minutes (optional)

  --verbose                          Returns all intents, otherwise only top scoring intent. (default: false)

EXAMPLE

       $ bf luis:application:query --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --appId {APP_ID} --query 
  {QUERY} --prod {BOOLEAN}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/query.ts)_

## `bf luis:application:rename`

Renames the application and updates its description

```
USAGE
  $ bf luis:application:rename

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --description=description          Description of LUIS application
  --endpoint=endpoint                LUIS endpoint hostname
  --json                             Display output as JSON
  --name=name                        (required) (required) Name of LUIS application

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

EXAMPLE

       $ bf luis:application:rename --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --appId {APP_ID} --name 
  {NAME} --description {DESCRIPTION}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/rename.ts)_

## `bf luis:application:show`

Shows application information

```
USAGE
  $ bf luis:application:show

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

EXAMPLE

       $ bf luis:application:show --appId {APPLICATION_ID} --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/application/show.ts)_

## `bf luis:build`

Build lu files to train and publish luis applications

```
USAGE
  $ bf luis:build

OPTIONS
  -f, --force                      If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help                       luis:build command help
  -i, --in=in                      Lu file or folder

  -o, --out=out                    Output folder name to write out .dialog and settings files. If not specified,
                                   application setting will be output to console

  --authoringKey=authoringKey      LUIS authoring key

  --botName=botName                Bot name

  --defaultCulture=defaultCulture  Culture code for the content. Infer from .lu if available. Defaults to en-us

  --deleteOldVersion               Deletes old version of LUIS application after building new one.

  --dialog=dialog                  Dialog recognizer type [multiLanguage|crosstrained]. No dialog recognizers will be
                                   generated if not specified. Only valid if --out is set

  --directVersionPublish           Available only in direct version query. Do not publish to staging or production

  --endpoint=endpoint              Luis authoring endpoint for publishing

  --fallbackLocale=fallbackLocale  Locale to be used at the fallback if no locale specific recognizer is found. Only
                                   valid if --out is set

  --isStaging                      Publishes luis application to staging slot if set. Default to production slot

  --log                            Writes out log messages to console

  --luConfig=luConfig              Path to config for lu build which can contain switches for arguments

  --region=region                  [default: westus] LUIS authoring region [westus|westeurope|australiaeast]

  --schema=schema                  Defines $schema for generated .dialog files

  --suffix=suffix                  Environment name as a suffix identifier to include in LUIS app name. Defaults to
                                   current logged in user alias

EXAMPLE

       $ bf luis:build --in {INPUT_FILE_OR_FOLDER} --authoringKey {AUTHORING_KEY} --botName {BOT_NAME}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/build.ts)_

## `bf luis:convert`

Convert .lu file(s) to a LUIS application JSON model or vice versa

```
USAGE
  $ bf luis:convert

OPTIONS
  -f, --force                    If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help                     luis:convert help
  -i, --in=in                    Source .lu file(s) or LUIS application JSON model
  -o, --out=out                  Output file or folder name. If not specified stdout will be used as output
  -r, --recurse                  Indicates if sub-folders need to be considered to file .lu file(s)
  --culture=culture              Lang code for the LUIS application
  --description=description      Text describing the LUIS applicaion
  --log                          Enables log messages
  --name=name                    Name of the LUIS application
  --schemaversion=schemaversion  Schema version of the LUIS application
  --sort                         When set, intent, utterances, entities are alphabetically sorted in .lu files
  --versionid=versionid          Version ID of the LUIS application
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/convert.ts)_

## `bf luis:cross-train`

Lu and Qna cross train tool

```
USAGE
  $ bf luis:cross-train

OPTIONS
  -f, --force              If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help               Luis:cross-train command help
  -i, --in=in              Source lu and qna files folder

  -o, --out=out            Output folder name. If not specified, the cross trained files will be written to
                           cross-trained folder under folder of current command

  --config=config          Path to config file of mapping rules

  --[no-]inner-dialog      Only do inner dialog cross train

  --intentName=intentName  [default: _Interruption] Interruption intent name

  --[no-]intra-dialog      Only do intra dialog cross train

  --log                    Writes out log messages to console
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/cross-train.ts)_

## `bf luis:endpoints:list`

Returns available deployment endpoints

```
USAGE
  $ bf luis:endpoints:list

OPTIONS
  -f, --force                        If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help                         show CLI help

  -o, --out=out                      Output results to specified file in JSON format, otherwise prints to STDOUT
                                     (optional)

  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)

  --endpoint=endpoint                LUIS endpoint hostname

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

EXAMPLE

       $ bf luis:endpoints:list --appId {APPLICATION_ID} --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} 
  --out {PATH_TO_JSON_FILE}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/endpoints/list.ts)_

## `bf luis:generate:cs`

Generate:cs generates a strongly typed C# source code from an exported (json) LUIS model.

```
USAGE
  $ bf luis:generate:cs

OPTIONS
  -f, --force            If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help             luis:generate:cs help
  -i, --in=in            Path to the file containing the LUIS application JSON model
  -o, --out=out          Output file or folder name. If not specified stdout will be used as output
  --className=className  Name of the autogenerated class (can include namespace)
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/generate/cs.ts)_

## `bf luis:generate:ts`

Generate:ts generates a strongly typed typescript source code from an exported (json) LUIS model.

```
USAGE
  $ bf luis:generate:ts

OPTIONS
  -f, --force            If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help             luis:generate:ts help
  -i, --in=in            Path to the file containing the LUIS application JSON model
  -o, --out=out          Output file or folder name. If not specified stdout will be used as output
  --className=className  Name of the autogenerated class
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/generate/ts.ts)_

## `bf luis:test`

Test a .lu file or LUIS application JSON model against a published LUIS model

```
USAGE
  $ bf luis:test

OPTIONS
  -a, --appId=appId                      (required) LUIS application Id
  -h, --help                             luis:test help
  -i, --in=in                            Source .lu file or LUIS application JSON model for testing
  -o, --out=out                          Output file or folder name. If not specified stdout will be used as output
  -s, --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key

  --allowIntentsCount=allowIntentsCount  [default: 1] Top-scoring intent or top n Intent with score to show in the
                                         result

  --endpoint=endpoint                    [default: https://westus.api.cognitive.microsoft.com] LUIS endpoint hostname

  --force                                If --out flag is provided with the path to an existing file, overwrites that
                                         file

  --intentOnly                           Only test intent

  --staging                              Presence of flag targets the staging app, if no flag passed defaults to
                                         production
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/test.ts)_

## `bf luis:train:run`

Issues asynchronous training request for LUIS application

```
USAGE
  $ bf luis:train:run

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname
  --json                             Display output as JSON
  --mode=mode                        Value specifying mode of training (Standard | Neural).

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              (required) Version to show training status (defaults to config:LUIS:versionId)

  --wait                             Wait until training complete and then display status

EXAMPLE

       $ bf luis:train:run --appId {APPLICATION_ID} --versionId {VERSION_ID} --endpoint {ENDPOINT} --subscriptionKey 
  {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/train/run.ts)_

## `bf luis:train:show`

Shows training status

```
USAGE
  $ bf luis:train:show

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              (required) Version to show training status (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:train:show --appId {APPLICATION_ID} --versionId {VERSION_ID} --endpoint {ENDPOINT} --subscriptionKey 
  {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/train/show.ts)_

## `bf luis:translate`

Translate given LUIS application JSON model or lu file(s)

```
USAGE
  $ bf luis:translate

OPTIONS
  -f, --force                                If --out flag is provided with the path to an existing file, overwrites
                                             that file

  -h, --help                                 luis:translate help

  -i, --in=in                                Source .lu file(s) or LUIS application JSON model

  -o, --out=out                              Output folder name. If not specified stdout will be used as output

  -r, --recurse                              Indicates if sub-folders need to be considered to file .lu file(s)

  --srclang=srclang                          Source lang code. Auto detect if missing.

  --subscription_region=subscription_region  Required request header if using a Cognitive Services Resource. Optional if
                                             using a Translator Resource.

  --tgtlang=tgtlang                          (required) Comma separated list of target languages.

  --translate_comments                       When set, machine translate comments found in .lu file

  --translate_link_text                      When set, machine translate link description in .lu file

  --translatekey=translatekey                (required) Machine translation endpoint key.
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/translate.ts)_

## `bf luis:version:clone`

Creates a new version equivalent to the current snapshot of the selected application version.

```
USAGE
  $ bf luis:version:clone

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname
  --json                             Display output as JSON
  --subscriptionKey=subscriptionKey  LUIS authoring (Ocp-Apim-subscription) key
  --targetVersionId=targetVersionId  (required) Destination version to create
  --versionId=versionId              (required) Source version to clone (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:version:clone --appId {APP_ID} --versionId {VERSION_ID} --targetVersionId {TARGET_VERSION_ID} 
  --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/version/clone.ts)_

## `bf luis:version:delete`

Deletes a LUIS application version

```
USAGE
  $ bf luis:version:delete

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname
  --json                             Display output as JSON

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              (required) Version to delete

EXAMPLE

       $ bf luis:version:delete --appId {APP_ID} --versionId {VERSION_ID} --endpoint {ENDPOINT} --subscriptionKey 
  {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/version/delete.ts)_

## `bf luis:version:export`

Exports a LUIS application to JSON format

```
USAGE
  $ bf luis:version:export

OPTIONS
  -f, --force                        Overwrites output file if exists, otherwise creates a parallel numbered file
                                     (optional)

  -h, --help                         show CLI help

  -o, --out=out                      Save exported application to specified file, uses STDOUT if not specified
                                     (optional)

  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)

  --endpoint=endpoint                LUIS endpoint hostname

  --exportLU                         Export format type as LU

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              (required) Version to export (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:version:export --appId {APP_ID} --versionId {VERSION_ID} --out {FILENAME.json or PATH/FILENAME.json} 
  --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/version/export.ts)_

## `bf luis:version:import`

Imports a new version into a LUIS application from JSON or LU content.

```
USAGE
  $ bf luis:version:import

OPTIONS
  -h, --help                         show CLI help

  -i, --in=in                        (required) File path containing LUIS application contents, uses STDIN if not
                                     specified

  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)

  --endpoint=endpoint                LUIS endpoint hostname

  --json                             Display output as JSON

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              Version to import (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:version:import --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --appId {APP_ID} --in 
  {PATH_TO_JSON} --versionId {VERSION_ID}
       $ echo {SERIALIZED_JSON} | bf luis:version:import --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} 
  --appId {APP_ID}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/version/import.ts)_

## `bf luis:version:list`

Returns application's versions

```
USAGE
  $ bf luis:version:list

OPTIONS
  -f, --force                        If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help                         show CLI help

  -o, --out=out                      Output results to specified folder and/or file in JSON format, otherwise prints to
                                     STDOUT (optional)

  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)

  --endpoint=endpoint                LUIS endpoint hostname

  --skip=skip                        Number of entries to skip. Default: 0 (no skips)

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --take=take                        Number of etnries to return. Maximum page size is 500. Default: 100

EXAMPLE

       $ bf luis:version:list --appId {APPLICATION_ID} --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --take 
  3
       $ bf luis:version:list --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --out {PATH_TO_JSON_FILE}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/version/list.ts)_

## `bf luis:version:rename`

Renames application version

```
USAGE
  $ bf luis:version:rename

OPTIONS
  -h, --help                         show CLI help
  --appId=appId                      (required) LUIS application Id (defaults to config:LUIS:appId)
  --endpoint=endpoint                LUIS endpoint hostname
  --json                             Display output as JSON
  --newVersionId=newVersionId        (required) New version id

  --subscriptionKey=subscriptionKey  (required) LUIS cognitive services subscription key (default:
                                     config:LUIS:subscriptionKey)

  --versionId=versionId              (required) Version to update (defaults to config:LUIS:versionId)

EXAMPLE

       $ bf luis:version:rename --endpoint {ENDPOINT} --subscriptionKey {SUBSCRIPTION_KEY} --appId {APP_ID} --name 
  {NAME} --description {DESCRIPTION}
```

_See code: [@microsoft/bf-luis-cli](https://github.com/microsoft/botframework-cli/tree/master/packages/luis/src/commands/luis/version/rename.ts)_

## `bf orchestrator`

Display Orchestrator CLI available commands

```
USAGE
  $ bf orchestrator

OPTIONS
  -h, --help  Orchestrator commands help
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/index.ts)_

## `bf orchestrator:add`

Add examples from .lu/.qna/.json/.blu files, LUIS app(s) and QnaMaker kb(s) to Orchestrator snapshot file.

```
USAGE
  $ bf orchestrator:add

OPTIONS
  -d, --debug
  -e, --entityModel=entityModel  Path to Orchestrator entity base model directory.
  -f, --force                    If --out flag is provided with the path to an existing file, overwrites that file.
  -h, --help                     Orchestrator add command help
  -i, --in=in                    Path to example file (.lu/.qna/.json/.blu).
  -k, --key=key                  LUIS authoring key or QnAMaker service key if type = luis/qna.
  -m, --model=model              Path to Orchestrator model directory.

  -o, --out=out                  Path where generated Orchestrator example file will be placed. Default to current
                                 working directory.

  -t, --type=type                Type of input (luis/qna/file).

  -v, --version=version          Applies only for type=luis, LUIS app version

  --dialog                       Generate multi language or cross train Orchestrator recognizers.

  --endpoint=endpoint            LUIS/QnAMaker endpoint.

  --id=id                        LUIS app id or QnAMaker kb id if type = luis/qna.

  --routingName=routingName      Routing name, default to file name.

EXAMPLE
	
       $ bf orchestrator:add 	
       $ bf orchestrator:add --in ./path/to/file/ --snapshot ./path/to/snapshot/	
       $ bf orchestrator:add --in ./path/to/file/ --snapshot ./path/to/snapshot/ --out ./path/to/output/	
       $ bf orchestrator:add --in ./path/to/file/ --out ./path/to/output/ --model ./path/to/model/directory
       $ bf orchestrator:add -t luis --id LUIS_APP_ID --version LUIS_APP_VERSION --key LUIS_KEY --routingname l_Weather 
  --endpoint 
       $ bf orchestrator:add -t qna --id QNA_KB  --key QNA_KB_SERVICE_KEY --routingname q_kb
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/add.ts)_

## `bf orchestrator:basemodel:get`

Gets Orchestrator base model

```
USAGE
  $ bf orchestrator:basemodel:get

OPTIONS
  -d, --debug
  -h, --help             Orchestrator basemodel:get command help

  -o, --out=out          Optional. Path to where Orchestrator base model will be saved to. Default to current working
                         directory.

  -v, --verbose          Enable verbose logging

  --getEntity            Optional. Download default entity model at the same time, which will be placed in the entity
                         subfolder of the output path.

  --versionId=versionId  Optional. Base model version to download -- reference basemodel:list output for options.  If
                         not specified, default model will be downloaded.
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/basemodel/get.ts)_

## `bf orchestrator:basemodel:list`

Lists all Orchestrator base model versions

```
USAGE
  $ bf orchestrator:basemodel:list

OPTIONS
  -h, --help  Orchestrator basemodel:list command help
  -r, --raw   Optional. Raw output
  --all       Optional. Display all models
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/basemodel/list.ts)_

## `bf orchestrator:build`

Creates Orchestrator snapshot file and Orchestrator dialog definition file (optional) for each lu file in input folder.

```
USAGE
  $ bf orchestrator:build

OPTIONS
  -d, --debug
  -e, --entityModel=entityModel  Path to Orchestrator entity base model directory.
  -h, --help                     Orchestrator build command help
  -i, --in=in                    Path to lu file or folder with lu files.
  -m, --model=model              Path to Orchestrator model.

  -o, --out=out                  Path where Orchestrator snapshot/dialog file(s) will be placed. Default to current
                                 working directory.

  --dialog                       Generate multi language or cross train Orchestrator recognizers.

  --luconfig=luconfig            Path to luconfig.json.
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/build.ts)_

## `bf orchestrator:create`

Create orchestrator snapshot (.blu) file from .lu/.qna/.json/.tsv/.dispatch files, which represent bot modules

```
USAGE
  $ bf orchestrator:create

OPTIONS
  -d, --debug
  -e, --entityModel=entityModel  Path to Orchestrator entity base model directory.
  -h, --help                     Orchestrator create command help

  -i, --in=in                    The path to source label files from where orchestrator example file will be created
                                 from. Default to current working directory.

  -m, --model=model              Path to Orchestrator base model directory.

  -o, --out=out                  Path where generated Orchestrator snapshot file will be placed. Default to current
                                 working directory.

  --hierarchical                 Add hierarchical labels based on .lu/.qna file name.  Resulting snapshot file will
                                 contain.lu/.qna file name as labels instead of the intents defined in the .lu file(s).

  --refresh                      Refetch LUIS app(s)/QnAMaker kb(s) previously added and recreate Orchestrator snapshot.
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/create.ts)_

## `bf orchestrator:interactive`

Real-time interaction with Orchestrator model and analysis. Can return score of given utterance using previously created orchestrator examples

```
USAGE
  $ bf orchestrator:interactive

OPTIONS
  -d, --debug
  -e, --entityModel=entityModel  Path to Orchestrator entity base model directory.
  -h, --help                     show CLI help
  -l, --in=in                    Optional path to a previously created Orchestrator .blu file.
  -m, --model=model              (required) Directory or hosting Orchestrator config and base model files.
  -o, --out=out                  Optional Directory where analysis and output files will be placed.

EXAMPLE

       $ bf orchestrator:interactive --in=./path/to/snapshot/file --out=./path/to/output/folder/ 
  --model=./path/to/model/directory
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/interactive.ts)_

## `bf orchestrator:query`

Query Orchestrator base model and a snapshot/train file

```
USAGE
  $ bf orchestrator:query

OPTIONS
  -d, --debug
  -e, --entityModel=entityModel  Path to Orchestrator entity base model directory.
  -h, --help                     show CLI help
  -i, --in=in                    (required) Path to a previously created Orchestrator snapshot (.blu file).

  -l, --limit=limit              (optional) Limit of number of predictions. Default to 3. Less or equal to 0 for listing
                                 all predictions.

  -m, --model=model              (required) Path to Orchestrator base model directory.

  -q, --query=query              (required) Query string to predict.

EXAMPLE

       $ bf orchestrator:query --in=./path/to/snapshot/file --query=hi --model=./path/to/base/model/directory
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/query.ts)_

## `bf orchestrator:test`

The "test" command can operate in three modes: test, evaluation, assessment.

```
USAGE
  $ bf orchestrator:test

OPTIONS
  -d, --debug
  -e, --entityModel=entityModel  Path to Orchestrator entity base model directory.
  -h, --help                     show CLI help
  -i, --in=in                    (required) Path to a previously created Orchestrator .blu file.

  -m, --model=model              Optional directory for hosting Orchestrator config and base model files, not needed for
                                 the "assessment" mode.

  -o, --out=out                  (required) Directory where analysis and output files will be placed.

  -p, --prediction=prediction    Optional path to a prediction label file, or comma-separated paths to a collection of
                                 (e.g., crosss-valiaton) files.

  -t, --test=test                Optional path to a test file. This option enable the "test" mode.

DESCRIPTION
  1) Test mode: test a collection of utterance/label samples loaded from a test file against
         a previously generated Orchestrator .blu snapshot/train file,
         and create a detailed train/test evaluation report.
     2) Evaluation mode: create an leave-one-out cross validation (LOOCV) evaluation report
         on a previously generated Orchestrator .blu snapshot/train file.
     3) Assessment mode: assess a collection of utterance/label predictions against their ground-truth labels and
         create an evaluation report. This mode can evaluate predictions produced by
         other NLP or machine learning systems. There is no need for an Orchestrator base model.
         Notice that, this mode is generic and can apply to evaluate any ML systems, learners, models,
         and scenarios if a user can carefully construct the prediction and grounf-truth files by
         the specification detailed below.
         Essentially the key to a NLP data instance is a text (utterance, sentence, query, document, etc.), which
         is the basis of all the features feeding to a ML model. For other ML systems, the key to
         a data instance can be built directly from the features and put in place of text
         in a prediction and ground-truth file.

     The 'test' mode is activated if there is a '--test' argument set for a test file.
     The 'assessment' mode is activated if there is a '--prediction' argument set for a prediction file.
     If there is no '--test' or '--prediction' arguments, then "test" command runs on the 'evaluation' mode.

EXAMPLE

       $ bf orchestrator:test --in=./path/to/snapshot/file --test=./path/to/test/file/ --out=./path/to/output/ 
  --model=./path/to/model/directory
       $ bf orchestrator:test --in=./path/to/ground-truth/file --prediction=./path/to/prediction/file 
  --out=./path/to/output/folder/
       $ bf orchestrator:test --in=./path/to/snapshot/file --out=./path/to/output/folder/ 
  [--model=./path/to/model/directory]
```

_See code: [@microsoft/bf-orchestrator-cli](https://github.com/microsoft/botframework-cli/src/commands/orchestrator/test.ts)_

## `bf plugins`

Install, uninstall and show installed plugins

```
USAGE
  $ bf plugins

OPTIONS
  --help  Display plugins commands help.
```

_See code: [@microsoft/bf-cli-plugins](https://github.com/microsoft/botframework-cli/tree/master/packages/plugins/src/commands/plugins/index.ts)_

## `bf plugins:install PLUGIN`

Installs a plugin into the BF CLI

```
USAGE
  $ bf plugins:install PLUGIN

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a user-installed plugin will override a core plugin.
  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. 
  This is useful if a user needs to update core plugin functionality in the CLI without the need to patch and update the 
  whole CLI.

ALIASES
  $ bf plugins:add
```

_See code: [@microsoft/bf-cli-plugins](https://github.com/microsoft/botframework-cli/tree/master/packages/plugins/src/commands/plugins/install.ts)_

## `bf plugins:link PLUGIN`

Links a plugin into the BF CLI for development

```
USAGE
  $ bf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.
  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.
```

_See code: [@microsoft/bf-cli-plugins](https://github.com/microsoft/botframework-cli/tree/master/packages/plugins/src/commands/plugins/link.ts)_

## `bf plugins:list`

List installed plugins

```
USAGE
  $ bf plugins:list

OPTIONS
  --core  show core plugins
```

_See code: [@microsoft/bf-cli-plugins](https://github.com/microsoft/botframework-cli/tree/master/packages/plugins/src/commands/plugins/list.ts)_

## `bf plugins:uninstall [PLUGIN]`

Removes a plugin from the BF CLI

```
USAGE
  $ bf plugins:uninstall [PLUGIN]

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@microsoft/bf-cli-plugins](https://github.com/microsoft/botframework-cli/tree/master/packages/plugins/src/commands/plugins/uninstall.ts)_

## `bf qnamaker`

QnA Maker

```
USAGE
  $ bf qnamaker

OPTIONS
  -h, --help  Display QnA Maker CLI available commands
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/index.ts)_

## `bf qnamaker:alterations`

Commands for replacing and listing your alterations

```
USAGE
  $ bf qnamaker:alterations

OPTIONS
  -h, --help  display qnamaker:alterations available commands
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/alterations/index.ts)_

## `bf qnamaker:alterations:list`

Downloads all word alterations (synonyms) that have been added by the user.

```
USAGE
  $ bf qnamaker:alterations:list

OPTIONS
  -h, --help                         qnamaker:alterations:list command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/alterations/list.ts)_

## `bf qnamaker:alterations:replace`

Replaces word alterations (synonyms) for the KB with the give records.

```
USAGE
  $ bf qnamaker:alterations:replace

OPTIONS
  -h, --help                         qnamaker:alterations:replace command help
  -i, --in=in                        File path to the WordAlterationsDTO object to send in the body of the request
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/alterations/replace.ts)_

## `bf qnamaker:build`

Build .qna files to create or update qnamaker knowledge bases and qnamaker alterations

```
USAGE
  $ bf qnamaker:build

OPTIONS
  -b, --botName=botName                  Bot name

  -f, --force                            If --out flag is provided with the path to an existing file, overwrites that
                                         file

  -h, --help                             qnamaker:build command help

  -i, --in=in                            Source .qna file or folder

  -o, --out=out                          Output folder name to write out .dialog and settings files. If not specified,
                                         knowledge base setting will be output to console

  -s, --subscriptionKey=subscriptionKey  QnA maker subscription key

  --defaultCulture=defaultCulture        Culture code for the content. Infer from .qna if available. Defaults to en-us
                                         if not set

  --dialog=dialog                        Dialog recognizer type [multiLanguage|crosstrained]. No dialog recognizers will
                                         be generated if not specified. Only valid if --out is set

  --endpoint=endpoint                    Qnamaker authoring endpoint for publishing

  --fallbackLocale=fallbackLocale        Locale to be used at the fallback if no locale specific recognizer is found.
                                         Only valid if --out is set

  --log                                  Writes out log messages to console

  --qnaConfig=qnaConfig                  Path to config for qna build which can contain switches for arguments

  --region=region                        [default: westus] Overrides public endpoint
                                         https://<region>.api.cognitive.microsoft.com/qnamaker/v4.0/

  --schema=schema                        Defines $schema for generated .dialog files

  --suffix=suffix                        Environment name as a suffix identifier to include in qnamaker kb name.
                                         Defaults to current logged in user alias

EXAMPLE

       $ bf qnamaker:build --in {INPUT_FILE_OR_FOLDER} --subscriptionKey {SUBSCRIPTION_KEY} --botName {BOT_NAME}
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/build.ts)_

## `bf qnamaker:convert`

Converts .qna file(s) to QnA application JSON models or vice versa.

```
USAGE
  $ bf qnamaker:convert

OPTIONS
  -f, --force    If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help     qnamaker:convert help
  -i, --in=in    Source .qna file(s) or QnA KB JSON file
  -o, --out=out  Output file or folder name. If not specified stdout will be used as output
  -r, --recurse  Indicates if sub-folders need to be considered to file .qna file(s)
  --alterations  Indicates if files is QnA Alterations
  --log          Enables log messages
  --name=name    Name of the QnA KB
  --sort         When set, questions collections are alphabetically sorted are alphabetically sorted in .qna files
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/convert.ts)_

## `bf qnamaker:cross-train`

Lu and Qna cross train tool

```
USAGE
  $ bf qnamaker:cross-train

OPTIONS
  -f, --force              If --out flag is provided with the path to an existing file, overwrites that file
  -h, --help               luis:cross-train command help
  -i, --in=in              Source lu and qna files folder

  -o, --out=out            Output folder name. If not specified, the cross trained files will be written to
                           cross-trained folder under folder of current command

  --config=config          Path to config file of mapping rules

  --intentName=intentName  [default: _Interruption] Interruption intent name

  --log                    Writes out log messages to console
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/cross-train.ts)_

## `bf qnamaker:endpointkeys`

Commands to refresh and list keys

```
USAGE
  $ bf qnamaker:endpointkeys

OPTIONS
  -h, --help  display qnamaker:endpointkeys available commands
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/endpointkeys/index.ts)_

## `bf qnamaker:endpointkeys:list`

List all the currently valid endpointKeys for querying your private endpoint

```
USAGE
  $ bf qnamaker:endpointkeys:list

OPTIONS
  -h, --help                         qnamaker:endpointkeys:list command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/endpointkeys/list.ts)_

## `bf qnamaker:endpointkeys:refresh`

Re-generates an endpoint key, in case you suspect your keys have been compromised

```
USAGE
  $ bf qnamaker:endpointkeys:refresh

OPTIONS
  -h, --help                         qnamaker:endpoints:refresh command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
  --keyType=keyType                  (required) Type of Key. (PrimaryKey/SecondaryKey)

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/endpointkeys/refresh.ts)_

## `bf qnamaker:endpointsettings`

Commands to get and update endpoint settings

```
USAGE
  $ bf qnamaker:endpointsettings

OPTIONS
  -h, --help  display qnamaker:update available commands
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/endpointsettings/index.ts)_

## `bf qnamaker:endpointsettings:get`

Gets endpoint settings for an endpoint.

```
USAGE
  $ bf qnamaker:endpointsettings:get

OPTIONS
  -h, --help                         qnamaker:endpointsettings:get command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
  --kbId=kbId                        Knowledgebase id to get metadata.

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/endpointsettings/get.ts)_

## `bf qnamaker:endpointsettings:update`

Updates endpoint settings for an endpoint.

```
USAGE
  $ bf qnamaker:endpointsettings:update

OPTIONS
  -h, --help                         qnamaker:endpointsettings:update command help
  --activelearning                   Enable active learning. Disables if flag not set
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/endpointsettings/update.ts)_

## `bf qnamaker:init`

Initializes the config file with settings.

```
USAGE
  $ bf qnamaker:init

OPTIONS
  -h, --help           qnamaker:init command help
  --endpoint=endpoint  Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/init.ts)_

## `bf qnamaker:kb`

Commands for manipulating your knowledge base

```
USAGE
  $ bf qnamaker:kb

OPTIONS
  -h, --help  display qnamaker:kb available commands
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/index.ts)_

## `bf qnamaker:kb:create`

Creates a new knowledgebase

```
USAGE
  $ bf qnamaker:kb:create

OPTIONS
  -h, --help                         qnamaker:kb:create command help
  -i, --in=in                        File path to the CreateKbDTO object to send in the body of the request.
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --name=name                        Name of the kb you want to create. This will override the name of KB that might be
                                     present in the CreateKb DTO

  --save                             Save the kbId in config.

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/create.ts)_

## `bf qnamaker:kb:delete`

Delete a knowledgebase by id

```
USAGE
  $ bf qnamaker:kb:delete

OPTIONS
  -h, --help                         qnamaker:kb:delete command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
  --force                            Do not prompt for confirmation, force the operation

  --kbId=kbId                        Knowledgebase id to be deleted. Overrides the knowledge base id present in the
                                     config

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/delete.ts)_

## `bf qnamaker:kb:export`

Echos a knowledgebase in json or qna format to stdout

```
USAGE
  $ bf qnamaker:kb:export

OPTIONS
  -f, --force                        If --out flag is provided with the path to an existing file, overwrites that file.
  -h, --help                         qnamaker:kb:export command help
  -o, --out=out                      Output file path. If not specified stdout will be used as output.
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
  --environment=environment          [default: Prod] Specifies whether environment is Test or Prod.

  --kbId=kbId                        Knowledgebase id to be exported. Overrides the knowledge base id present in the
                                     config

  --qnaFormat                        Specifies if the content should be exported to .qna format.

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/export.ts)_

## `bf qnamaker:kb:get`

Get metadata about a knowledgebase

```
USAGE
  $ bf qnamaker:kb:get

OPTIONS
  -h, --help                         qnamaker:kb:get command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --kbId=kbId                        Knowledgebase id to get metadata. Overrides the knowledge base id present in the
                                     config

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/get.ts)_

## `bf qnamaker:kb:list`

List all of your knowledgebases

```
USAGE
  $ bf qnamaker:kb:list

OPTIONS
  -h, --help                         qnamaker:kb:list command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/list.ts)_

## `bf qnamaker:kb:publish`

Publish all unpublished in the knowledgebase to the prod endpoint.

```
USAGE
  $ bf qnamaker:kb:publish

OPTIONS
  -h, --help                         qnamaker:kb:publish command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
  --kbId=kbId                        Knowledgebase id to pubish. Overrides the knowledge base id present in the config

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/publish.ts)_

## `bf qnamaker:kb:replace`

Replace a knowledgebase contents with new contents

```
USAGE
  $ bf qnamaker:kb:replace

OPTIONS
  -h, --help                         qnamaker:kb:replace command help

  -i, --in=in                        File path to the ReplaceKbDTO object to send in the body of the request.
                                     Alternately this can be path to a .qna file

  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --kbId=kbId                        Knowledgebase id. Overrides the knowledge base id present in the config

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/replace.ts)_

## `bf qnamaker:kb:update`

Add or delete QnA Pairs and / or URLs to an existing knowledge base

```
USAGE
  $ bf qnamaker:kb:update

OPTIONS
  -h, --help                         qnamaker:kb:update command help

  -i, --in=in                        The file path to the UpdateKbOperationDTO object to send in the body of the
                                     request.

  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/

  --kbId=kbId                        Knowledgebase id. Overrides the knowledge base id present in the config

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config

  --wait                             Wait for the operation to complete.
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/kb/update.ts)_

## `bf qnamaker:operationdetails`

Command to get operation details

```
USAGE
  $ bf qnamaker:operationdetails

OPTIONS
  -h, --help  display qnamaker:operationdetails available commands
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/operationdetails/index.ts)_

## `bf qnamaker:operationdetails:get`

Gets details of a specific long running operation.

```
USAGE
  $ bf qnamaker:operationdetails:get

OPTIONS
  -h, --help                         qnamaker:operationdetails:get command help
  --endpoint=endpoint                Overrides public endpoint https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/
  --operationId=operationId          (required) Operation id.

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in the config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/operationdetails/get.ts)_

## `bf qnamaker:query`

Generate Answer for fetching the answer from Kb for a query

```
USAGE
  $ bf qnamaker:query

OPTIONS
  -h, --help                       qnamaker:query command help
  --context=context                Path to Context object json file with previous QnA

  --endpointKey=endpointKey        Specifies the endpoint key for your private QnA service (From qnamaker.ai portal user
                                   settings page). Overrides the value present in config

  --hostname=hostname              Specifies the url for your private QnA service. Overrides the value present in config

  --kbId=kbId                      Specifies the active qnamaker knowledgebase id. Overrides the value present in the
                                   config

  --qnaId=qnaId                    Exact qnaId to fetch from the knowledgebase, this field takes priority over question

  --question=question              (required) Query to get a prediction for

  --scorethreshold=scorethreshold  Specifies the confidence score threshold for the returned answer.

  --strictfilters=strictfilters    Path to json file with MetadataDTO[] e.g {"strictfilters": MetadataDTO[]}

  --test                           Query against the test index

  --top=top                        Specifies the number of matching results
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/query.ts)_

## `bf qnamaker:train`

Train call to add suggestions to the knowledgebase.

```
USAGE
  $ bf qnamaker:train

OPTIONS
  -h, --help                         qnamaker:get:kb command help

  --endpointKey=endpointKey          Specifies the endpoint key for your private QnA service.(from qnamaker.ai portal
                                     user settings page). Overrides the value present in config.

  --hostname=hostname                Specifies the url for your private QnA service. Overrides the value present in
                                     config.

  --in=in                            File path to the FeedbackRecordDTO object to send in the body of the request.

  --kbId=kbId                        Specifies the active qnamaker knowledgebase id. Overrides the value present in the
                                     config

  --subscriptionKey=subscriptionKey  Specifies the qnamaker Ocp-Apim-Subscription Key (found in Keys under Resource
                                     Management section for your Qna Maker cognitive service). Overrides the
                                     subscriptionkey value present in config
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/train.ts)_

## `bf qnamaker:translate`

Translate given QnA maker application JSON model or qna file(s)

```
USAGE
  $ bf qnamaker:translate

OPTIONS
  -f, --force                                If --out flag is provided with the path to an existing file, overwrites
                                             that file

  -h, --help                                 qnamaker:translate help

  -i, --in=in                                Source .qna file(s) or QnA maker application JSON model

  -o, --out=out                              Output folder name. If not specified stdout will be used as output

  -r, --recurse                              Indicates if sub-folders need to be considered to find .qna file(s)

  --srclang=srclang                          Source lang code. Auto detect if missing.

  --subscription_region=subscription_region  Required request header if using a Cognitive Services Resource. Optional if
                                             using a Translator Resource.

  --tgtlang=tgtlang                          (required) Comma separated list of target languages.

  --translate_comments                       When set, machine translate comments found in .qna file

  --translate_link_text                      When set, machine translate link description in .qna file

  --translatekey=translatekey                (required) Machine translation endpoint key.
```

_See code: [@microsoft/bf-qnamaker](https://github.com/microsoft/botframework-cli/tree/master/packages/qnamaker/src/commands/qnamaker/translate.ts)_
<!-- commandsstop -->
