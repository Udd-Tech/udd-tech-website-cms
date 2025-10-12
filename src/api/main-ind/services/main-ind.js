'use strict';

/**
 * main-ind service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-ind.main-ind');
