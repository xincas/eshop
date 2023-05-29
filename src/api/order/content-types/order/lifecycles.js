module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;
        console.log('email send event');

        const entry = await strapi.entityService.findOne('api::order.order', result.id, {
            populate: {
                user: true,
                items: {
                  populate: {
                    product: true,
                  },
                },
              },
          });

        const sub = `Новый заказ ${entry.id}`;
        const msg = `<p>Оформлен новый заказ.</p><p>Клиент ${entry.user.name}, телефон ${entry.user.phone}.</p><p>На сумму: ${entry.total}</p>`;
        var itemsstr = '<p>';
        entry.items.forEach(element => {
            itemsstr = itemsstr + `<li>${element.product.name}, кол-во: ${element.count}</li>`;
        });
        itemsstr = itemsstr + '</p>';
        

        try{
            await strapi.plugins['email'].services.email.send({
            to: process.env.EMAIL,
            from: 'noreply-eshop-nails@eshop.nails.ru',
            subject: sub,
            html: msg.concat(itemsstr)
            })
        } catch(err) {
            console.log(err);
        }
    }
};