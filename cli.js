#!/usr/bin/env node
var program = require('commander');

program
    .command('init')
    .description("Initialize and authorize with Amazon's Cloud Drive")
    .action(function(cmd, options) {
        require('./lib/Commands/InitCommand').execute(cmd, options);
    });

program.command('sync')
    .description("Sync the local cache with Amazon Cloud Drive")
    .action(function (cmd, options) {
        require('./lib/Commands/SyncCommand').execute(cmd, options);
    });

program.command('clearcache')
    .description('Clear the local cache')
    .action(function (cmd, options) {
        require('./lib/Commands/ClearCacheCommand').execute(cmd, options);
    });

program.command('metadata [remotePath]')
    .description("Retrieve metadata of a node by its path")
    .option('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, options) {
        require('./lib/Commands/MetadataCommand').execute(remotePath, options);
    });

program.command('config [option] [value]')
    .description('Read, write, and remove config options')
    .option('-r', '--remove', 'Remove / reset the config option to its default value')
    .action(function (option, value, options) {
        require('./lib/Commands/ConfigCommand').execute(option, value, options);
    });

program.command('ls [remote_path]')
    .description('List all remote nodes belonging to a specified node')
    .option('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, options) {
        require('./lib/Commands/ListCommand').execute(remotePath, options);
    });

program.command('trash')
    .description('List all nodes in the trash')
    .action(function (cmd, options) {
        require('./lib/Commands/ListTrashCommand').execute(cmd, options);
    });

program.command('rm <remote_path>')
    .description('Move a remote Node to the trash')
    .option('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, options) {
        require('./lib/Commands/TrashCommand').execute(remotePath, options);
    });

program.command('restore <remote_path>')
    .description('Restore a remote node from the trash')
    .option('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, options) {
        require('./lib/Commands/RestoreCommand').execute(remotePath, options);
    });

program.command('du [remote_path]')
    .description('Display the disk usage (recursively) for the specified node')
    .option ('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, options) {
        require('./lib/Commands/DiskUsageCommand').execute(remotePath, options);
    });

program.command('tree [remote_path]')
    .description('Print directory tree of the given node')
    .option('-m, --markdown', 'Output tree in Markdown')
    .option ('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, options) {
        require('./lib/Commands/TreeCommand').execute(remotePath, options);
    });

program.command('resolve [id]')
    .description("Return a node's remote path by its ID")
    .action(function (id, options) {
        require('./lib/Commands/ResolveCommand').execute(id, options);
    });

program.command('rename <remote_path> <name>')
    .description("Rename a remote node")
    .option ('-i, --id', 'Specify the remote node by its ID rather than path')
    .action(function (remotePath, name, options) {
        require('./lib/Commands/RenameCommand').execute(remotePath, name, options);
    });

program.command('mkdir <remote_path>')
    .description("Create a remote directory path (recursively)")
    .action(function (cmd, options) {
        require('./lib/Commands/MkdirCommand').execute(cmd, options);
    });

program.command('mv <remote_path> [new_path]>')
    .description("Move a remote node to a new directory")
    .action(function (remotePath, newPath, options) {
        require('./lib/Commands/MoveCommand').execute(remotePath, newPath, options);
    });

program.parse(process.argv);