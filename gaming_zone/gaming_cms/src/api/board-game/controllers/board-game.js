'use strict';

/**
 * board-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::board-game.board-game');
