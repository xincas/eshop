'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({

    /*async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;

        const entry = await strapi.service('api::category.category').populateAllById(id, query);
        const sanitizedResults = await this.sanitizeOutput(entry, ctx); 
        return sanitizedResults;
    },

    async find(ctx) {
        const sanitizedQuery = await this.sanitizeQuery(ctx);
        const { results, pagination } = await strapi.service('api::category.category').find(sanitizedQuery);

        const data = await strapi.service('api::category.category').populateAll(results);

        const sanitizedResults = await this.sanitizeOutput(data, ctx);
        return this.transformResponse(sanitizedResults, { pagination });
    },

    async getProductsOfCategory(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const entry = await strapi.service('api::category.category').getProductsOfCategory(id, query);

        const sanitizedResults = await this.sanitizeOutput(entry, ctx); 

        return this.transformResponse(sanitizedResults, { pagination });
        

        //const tmp2 = await strapi.controller('api::product.product').find(ctx.params.id);

        return
    }*/

}));
