'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', {

    async find(ctx) {
        const user = ctx.state.user;

        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            user: user.id
        };

        return super.find(ctx);
    },

    async findOne(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            user: user.id
        };
    
        return super.findOne(ctx);
    },

    async update(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            user: user.id
        };
    
        return super.update(ctx);
    },
    async delete(ctx){
        const user = ctx.state.user;
    
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            user: user.id
        };
    
        return super.delete(ctx);
    }
});
