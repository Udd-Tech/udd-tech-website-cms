'use strict';

/**
 * koti service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::koti.koti');
