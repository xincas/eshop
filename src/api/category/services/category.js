'use strict';

/**
 * category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::category.category', ({strapi}) => ({
    /*
    async populateImage(id) {
        return await strapi.entityService.findOne("api::category.category", id, {
            populate: { image: true }
        });
    },

    async populateParent(id) {
        return await strapi.entityService.findOne("api::category.category", id, {
            populate: { parent_category: true }
        });
    },

    async populateAllById(id, params = {}) {
        const fetchParams = this.getFetchParams(params);
        fetchParams.populate = [ 'image', 'parent_category', 'products' ];

        const entry = await strapi.entityService.findOne("api::category.category", id, fetchParams);

        //recursive populate
        if (entry.parent_category != null) {
            entry.parent_category = await this.populateAllById(entry.parent_category.id, params);
        }

        return entry;
    },

    async populateAll(entries) {
        const result = [];
        for (let i = 0; i < entries.length; i++) {
            result.push(await this.populateAllById(entries[i].id)); 
        }
        return result;
    },

    async getProductsOfCategory(id, params = {}) {

        const filters = { 
            categories: {
                id: {
                    $eq: id
                }
            }
        };

        params.filters = filters;

        const {results, pagination} = await strapi.service("api::product.product").find(filters);

        console.log(results);
        console.log('\n\n');

        const entity = await super.findOne(id, {
            populate: { 
                products: true 
            }
        });

        console.log(entity);
        console.log('\n\n');

        return entity.products;
    }*/
}));
