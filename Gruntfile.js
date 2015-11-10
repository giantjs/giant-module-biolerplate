/*jshint node:true */
module.exports = function (grunt) {
    "use strict";

    var $asset = require('giant-asset'),
        $gruntTools = require('giant-grunt-tools'),
        packageNode = require('./package.json'),
        manifestNode = require('./manifest.json'),
        manifest = $asset.Manifest.create(manifestNode),
        multiTasks = [].toMultiTaskCollection(),
        gruntTasks = [].toGruntTaskCollection();

    $gruntTools.GruntProxy.create()
        .setGruntObject(grunt);

    'karma'
        .toMultiTask({
            'default': {
                configFile: 'karma.conf.js',
                singleRun : true
            }
        })
        .setPackageName('grunt-karma')
        .addToCollection(multiTasks);

    'clean'
        .toMultiTask({
            default: ['lib']
        })
        .setPackageName('grunt-contrib-clean')
        .addToCollection(multiTasks);

    'concat'
        .toMultiTask({
            'default': {
                src : manifest.getAssets('js')
                    .getAssetNames(),
                dest: 'lib/' + packageNode.name + '.js'
            }
        })
        .setPackageName('grunt-contrib-concat')
        .addToCollection(multiTasks);

    'build'
        .toAliasTask()
        .addSubTasks('karma', 'clean', 'concat')
        .addToCollection(gruntTasks);

    // registering tasks
    multiTasks.toGruntConfig()
        .applyConfig()
        .getAliasTasksGroupedByTarget()
        .mergeWith(multiTasks.toGruntTaskCollection())
        .mergeWith(gruntTasks)
        .applyTask();
};
