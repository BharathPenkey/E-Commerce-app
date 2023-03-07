'use strict';

/**
 * combat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::combat.combat');
