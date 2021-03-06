  'use strict';
module.exports = (opts) => {
  if(typeof(opts) === undefined) {
    opts = {};
  }

  if(typeof(opts.appName) !== 'string') {
    opts.appName = 'shopify-app';
  }

  if(typeof(opts.baseUrl) !== 'string') {
    opts.baseUrl = `/api/${opts.appName}/:shopName`;
  }

  let definitions = {
    debug: require('debug')('shopify-server:definitions'),
  };

  /**
   * TODO implement Shopify Query Language: https://help.shopify.com/api/reference/shopify-ql
   * TODO implement Analytics API: https://help.shopify.com/api/tutorials/analytics-api
   */
  definitions.api = {
    apiPermission: {
      delete: {args: [], needScope: null},
    },
    applicationCharge: {
      activate: {args: ['id', 'params'], needScope: null},
      create: {args: ['params'], needScope: null},
      get: {args: ['id', '(params)'], needScope: null},
      list: {args: ['(params)'], needScope: null},
    },
    article: {
      authors: {args: []},
      count: {args: ['blogId', '(params)'], needScope: 'read_content'},
      create: {args: ['blogId', 'params'], needScope: 'write_content'},
      delete: {args: ['blogId', 'id'], needScope: 'write_content'},
      get: {args: ['blogId', 'id', '(params)'], needScope: 'read_content'},
      list: {args: ['blogId', '(params)'], needScope: 'read_content'},
      tags: {args: ['(blogId)', '(params)'], needScope: 'read_content'},
      update: {args: ['blogId', 'id', 'params'], needScope: 'write_content'},
    },
    asset: {
      create: {args: ['themeId', 'params'], needScope: 'write_themes'},
      delete: {args: ['themeId', 'params'], needScope: 'write_themes'},
      get: {args: ['themeId', 'params'], needScope: 'read_themes'},
      list: {args: ['themeId', '(params)'], needScope: 'read_themes'},
      update: {args: ['themeId', 'params'], needScope: 'write_themes'},
    },
    blog: {
      count: {args: [], needScope: 'read_content'},
      create: {args: ['params'], needScope: 'write_content'},
      delete: {args: ['id'], needScope: 'write_content'},
      get: {args: ['id', '(params)'], needScope: 'read_content'},
      list: {args: ['(params)'], needScope: 'read_content'},
      update: {args: ['id', 'params'], needScope: 'write_content'},
    },
    carrierService: {
      create: {args: ['params'], needScope: 'write_shipping'},
      delete: {args: ['id'], needScope: 'write_shipping'},
      get: {args: ['id'], needScope: 'read_shipping'},
      list: {args: [], needScope: 'read_shipping'},
      update: {args: ['id', 'params'], needScope: 'write_shipping'},
    },
    /**
     * TODO Whats with write_checkouts?
     */
    checkout: {
      count: {args: ['(params)'], needScope: 'read_checkouts'},
      list: {args: ['(params)'], needScope: 'read_checkouts'},
    },
    collect: {
      count: {args: ['(params)'], needScope: 'read_products'},
      create: {args: ['params'], needScope: 'write_products'},
      delete: {args: ['id', '(params)'], needScope: 'write_products'},
      get: {args: ['id'], needScope: 'read_products'},
      list: {args: ['(params)'], needScope: 'read_products'},
    },
    comment: {
      approve: {args: ['id'], needScope: 'write_content'},
      count: {args: ['(params)'], needScope: 'read_content'},
      create: {args: ['params'], needScope: 'write_content'},
      get: {args: ['id', '(params)'], needScope: 'read_content'},
      list: {args: ['(params)'], needScope: 'read_content'},
      notSpam: {args: ['id'], needScope: 'write_content'},
      remove: {args: ['id'], needScope: 'write_content'},
      restore: {args: ['id'], needScope: 'write_content'},
      spam: {args: ['id'], needScope: 'write_content'},
      update: {args: ['id', 'params'], needScope: 'write_content'},
    },
    country: {
      count: {args: [], needScope: 'read_shipping'},
      create: {args: ['params'], needScope: 'write_shipping'},
      delete: {args: ['id'], needScope: 'write_shipping'},
      get: {args: ['id', '(params)'], needScope: 'read_shipping'},
      list: {args: ['(params)'], needScope: 'read_shipping'},
      update: {args: ['id', 'params'], needScope: 'write_shipping'},
    },
    customCollection: {
      count: {args: ['(params)'], needScope: 'read_products'},
      create: {args: ['params'], needScope: 'write_products'},
      delete: {args: ['id'], needScope: 'write_products'},
      get: {args: ['id', '(params)'], needScope: 'read_products'},
      list: {args: ['(params)'], needScope: 'read_products'},
      update: {args: ['id', 'params'], needScope: 'write_products'},
    },
    customer: {
      accountActivationUrl: {args: ['id'], needScope: 'write_customers'},
      count: {args: [], needScope: 'read_customers'},
      create: {args: ['params'], needScope: 'write_customers'},
      delete: {args: ['id'], needScope: 'write_customers'},
      get: {args: ['id', '(params)'], needScope: 'read_customers'},
      list: {args: ['(params)'], needScope: 'read_customers'},
      search: {args: ['params'], needScope: 'read_customers'},
      update: {args: ['id', 'params'], needScope: 'write_customers'},
    },
    customerAddress: {
      create: {args: ['customerId', 'params'], needScope: 'write_customers'},
      default: {args: ['customerId', 'id'], needScope: 'write_customers'},
      delete: {args: ['customerId', 'id'], needScope: 'write_customers'},
      get: {args: ['customerId', 'id'], needScope: 'read_customers'},
      list: {args: ['customerId', '(params)'], needScope: 'read_customers'},
      set: {args: ['customerId', 'params'], needScope: 'write_customers'},
      update: {args: ['customerId', 'id', 'params'], needScope: 'write_customers'},
    },
    customerSavedSearch: {
      count: {args: ['(params)'], needScope: 'read_customers'},
      create: {args: ['params'], needScope: 'write_customers'},
      customers: {args: ['id', '(params)'], needScope: 'write_customers'},
      delete: {args: ['id'], needScope: 'write_customers'},
      get: {args: ['id', '(params)'], needScope: 'read_customers'},
      list: {args: ['(params)'], needScope: 'read_customers'},
      update: {args: ['id', 'params'], needScope: 'write_customers'},
    },
    /**
     * TESTME Is read_customers, write_customers the right scope?
     */
    discount: {
      create: {args: ['params'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
      delete: {args: ['id'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
      disable: {args: ['id'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
      enable: {args: ['id'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
      get: {args: ['id'], needScope: 'read_customers', needPlan: 'Shopify Plus'},
      list: {args: ['(params)'], needScope: 'read_customers', needPlan: 'Shopify Plus'},
    },
    draftOrder: {
      complete: {args: ['id', '(param)'], needScope: 'write_draft_orders'},
      count: {args: [], needScope: 'read_draft_orders'},
      create: {args: ['params'], needScope: 'write_draft_orders'},
      delete: {args: ['id'], needScope: 'write_draft_orders'},
      get: {args: ['id', '(param)'], needScope: 'read_draft_orders'},
      list: {args: ['(params)'], needScope: 'read_draft_orders'},
      sendInvoice: {args: ['id', '(param)'], needScope: 'write_draft_orders'},
      update: {args: ['id', 'params'], needScope: 'write_draft_orders'},
    },
    /**
     * TESTME Doses this need a scope?
     */
    event: {
      count: {args: ['(params)'], needScope: null},
      get: {args: ['id', '(params)'], needScope: null},
      list: {args: ['(params)'], needScope: null},
    },
    fulfillment: {
      cancel: {args: ['orderId', 'id'], needScope: 'write_orders'},
      complete: {args: ['orderId', 'id'], needScope: 'write_orders'},
      count: {args: ['orderId', '(params)'], needScope: 'read_orders'},
      create: {args: ['orderId', 'params'], needScope: 'write_orders'},
      get: {args: ['orderId', 'id', '(params)'], needScope: 'read_orders'},
      list: {args: ['orderId', '(params)'], needScope: 'read_orders'},
      open: {args: ['orderId', 'id'], needScope: 'write_orders'},
      update: {args: ['orderId', 'id', 'params'], needScope: 'write_orders'},
    },
    fulfillmentEvent: {
      create: {args: ['orderId', 'fulfillmentId', 'params'], needScope: 'write_orders'},
      delete: {args: ['orderId', 'fulfillmentId', 'id'], needScope: 'write_orders'},
      get: {args: ['orderId', 'fulfillmentId', 'id'], needScope: 'read_orders'},
      list: {args: ['orderId', 'fulfillmentId', '(params)'], needScope: 'read_orders'},
      update: {args: ['orderId', 'fulfillmentId', 'id', 'params'], needScope: 'write_orders'},
    },
    fulfillmentService: {
      create: {args: ['params'], needScope: 'write_fulfillments'},
      delete: {args: ['id'], needScope: 'write_fulfillments'},
      get: {args: ['id'], needScope: 'read_fulfillments'},
      list: {args: ['(params)'], needScope: 'read_fulfillments'},
      update: {args: ['id', 'params'], needScope: 'write_fulfillments'},
    },
    /**
     * TESTME Is read_customers, write_customers the right scope?
     */
    giftCard: {
      count: {args: ['(params)'], needScope: 'read_customers', needPlan: 'Shopify Plus'},
      create: {args: ['params'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
      disable: {args: ['id'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
      get: {args: ['id'], needScope: 'read_customers', needPlan: 'Shopify Plus'},
      list: {args: ['(params)'], needScope: 'read_customers', needPlan: 'Shopify Plus'},
      search: {args: ['params'], needScope: 'read_customers', needPlan: 'Shopify Plus'},
      update: {args: ['id', 'params'], needScope: 'write_customers', needPlan: 'Shopify Plus'},
    },
    /**
     * TESTME Doses this need a scope?
     */
    location: {
      get: {args: ['id'], needScope: null},
      list: {args: [], needScope: null},
    },
    metafield: {
      count: {args: ['(params)'], needScope: ''},
      create: {args: ['params'], needScope: ''},
      delete: {args: ['id'], needScope: ''},
      get: {args: ['id', '(params)'], needScope: ''},
      list: {args: ['(params)'], needScope: ''},
      update: {args: ['id', 'params'], needScope: ''},
    },
    order: {
      cancel: {args: ['id', '(params)'], needScope: 'write_orders'},
      close: {args: ['id'], needScope: 'write_orders'},
      count: {args: ['(params)'], needScope: 'read_orders'},
      create: {args: ['params'], needScope: 'write_orders'},
      delete: {args: ['id'], needScope: 'write_orders'},
      get: {args: ['id', '(params)'], needScope: 'read_orders'},
      list: {args: ['(params)'], needScope: 'read_orders'},
      open: {args: ['id'], needScope: 'write_orders'},
      update: {args: ['id', 'params'], needScope: 'write_orders'},
    },
    /**
     * TESTME Has this the right scopes?
     */
    orderRisk: {
      create: {args: ['orderId', 'params'], needScope: 'write_orders'},
      delete: {args: ['orderId', 'id'], needScope: 'write_orders'},
      get: {args: ['orderId', 'id'], needScope: 'read_orders'},
      list: {args: ['orderId'], needScope: 'read_orders'},
      update: {args: ['orderId', 'id', 'params'], needScope: 'write_orders'},
    },
    page: {
      count: {args: ['(params)'], needScope: 'read_content'},
      create: {args: ['params'], needScope: 'write_content'},
      delete: {args: ['id'], needScope: 'write_content'},
      get: {args: ['id', '(params)'], needScope: 'read_content'},
      list: {args: ['(params)'], needScope: 'read_content'},
      update: {args: ['id', 'params'], needScope: 'write_content'},
    },
    /**
     * TESTME Doses this need a scope?
     */
    policy: {
      list: {args: ['(params)'], needScope: null},
    },
    product: {
      count: {args: ['(params)'], needScope: 'read_products'},
      create: {args: ['params'], needScope: 'write_products'},
      delete: {args: ['id'], needScope: 'write_products'},
      get: {args: ['id', '(params)'], needScope: 'read_products'},
      list: {args: ['(params)'], needScope: 'read_products'},
      update: {args: ['id', 'params'], needScope: 'write_products'},
    },
    productImage: {
      count: {args: ['productId', '(params)'], needScope: 'read_products'},
      create: {args: ['productId', 'params'], needScope: 'write_products'},
      delete: {args: ['productId', 'id'], needScope: 'write_products'},
      get: {args: ['productId', 'id', '(params)'], needScope: ''},
      list: {args: ['productId', '(params)'], needScope: 'read_products'},
      update: {args: ['productId', 'id', 'params'], needScope: 'write_products'},
    },
    productVariant: {
      count: {args: ['productId'], needScope: 'read_products'},
      create: {args: ['productId', 'params'], needScope: 'write_products'},
      delete: {args: ['productId', 'id'], needScope: 'write_products'},
      get: {args: ['id', '(params)'], needScope: 'read_products'},
      list: {args: ['productId', '(params)'], needScope: 'read_products'},
      update: {args: ['id', 'params'], needScope: 'write_products'},
    },
    province: {
      count: {args: ['countryId', '(params)'], needScope: 'read_shipping'},
      get: {args: ['countryId', 'id', '(params)'], needScope: 'read_shipping'},
      list: {args: ['countryId', '(params)'], needScope: 'read_shipping'},
      update: {args: ['countryId', 'id', 'params'], needScope: 'write_shipping'},
    },
    recurringApplicationCharge: {
      activate: {args: ['id', 'params'], needScope: null},
      create: {args: ['params'], needScope: null},
      delete: {args: ['id'], needScope: null},
      get: {args: ['id', '(params)'], needScope: null},
      list: {args: ['(params)'], needScope: null},
    },
    redirect: {
      count: {args: ['(params)'], needScope: 'read_content'},
      create: {args: ['params'], needScope: 'write_content'},
      delete: {args: ['id'], needScope: 'write_content'},
      get: {args: ['id', '(params)'], needScope: 'read_content'},
      list: {args: ['(params)'], needScope: 'read_content'},
      update: {args: ['id', 'params'], needScope: 'write_content'},
    },
    /**
     * TESTME Doses this need a scope?
     * TODO implement missing api requests: https://help.shopify.com/api/reference/refund
     */
    refund: {
      get: {args: ['orderId', 'id', '(params)'], needScope: null},
    },
    scriptTag: {
      count: {args: ['(params)'], needScope: 'read_script_tags'},
      create: {args: ['params'], needScope: 'write_script_tags'},
      delete: {args: ['id'], needScope: 'write_script_tags'},
      get: {args: ['id', '(params)'], needScope: 'read_script_tags'},
      list: {args: ['(params)'], needScope: 'read_script_tags'},
      update: {args: ['id', 'params'], needScope: 'write_script_tags'},
    },
    shippingZone: {
      list: {args: ['(params)'], needScope: null},
    },
    shop: {
      get: {args: ['(params)'], needScope: null},
    },
    smartCollection: {
      count: {args: ['(params)'], needScope: 'read_products'},
      create: {args: ['params'], needScope: 'write_products'},
      delete: {args: ['id'], needScope: 'write_products'},
      get: {args: ['id', '(params)'], needScope: 'read_products'},
      list: {args: ['(params)'], needScope: 'read_products'},
      order: {args: ['id', 'params'], needScope: 'write_products'},
      update: {args: ['id', 'params'], needScope: 'write_products'},
    },
    theme: {
      create: {args: ['params'], needScope: 'write_themes'},
      delete: {args: ['id'], needScope: 'write_themes'},
      get: {args: ['id', '(params)'], needScope: 'read_themes'},
      list: {args: ['(params)'], needScope: 'read_themes'},
      update: {args: ['id', 'params'], needScope: 'write_themes'},
    },
    transaction: {
      count: {args: ['orderId'], needScope: 'read_orders'},
      create: {args: ['orderId', 'params'], needScope: 'write_orders'},
      get: {args: ['orderId', 'id', '(params)'], needScope: 'read_orders'},
      list: {args: ['orderId', '(params)'], needScope: 'read_orders'},
    },
    usageCharge: {
      create: {args: ['recurringApplicationChargeId', 'params'], needScope: null},
      get: {args: ['recurringApplicationChargeId', 'id', '(params)'], needScope: null},
      list: {args: ['recurringApplicationChargeId', '(params)'], needScope: null},
    },
    /**
     * TODO Whats with write_users?
     */
    user: {
      current: {args: [], needScope: 'read_users', needPlan: 'Shopify Plus'},
      get: {args: ['id'], needScope: 'read_users', needPlan: 'Shopify Plus'},
      list: {args: [], needScope: 'read_users', needPlan: 'Shopify Plus'},
    },
    /**
     * TESTME Doses this need a scope?
     */
    webhook: {
      count: {args: ['(params)'], needScope: null},
      create: {args: ['params'], needScope: null},
      delete: {args: ['id'], needScope: null},
      get: {args: ['id', '(params)'], needScope: null},
      list: {args: ['(params)'], needScope: null},
      update: {args: ['id', 'params'], needScope: null},
    },
  };


  for(let resourceName in definitions.api) {
    if(resourceName) {
      let resource = definitions.api[resourceName];
      definitions.debug(resourceName);
      for(let methodName in resource) {
        if(methodName) {
          let method = resource[methodName];
          method.url = `${opts.baseUrl}/${resourceName}/${methodName}`;

          /*
          * Parse args to show if it is optional or not
          */
          method.parsedArgs = [];
          for (let i = 0; i < method.args.length; i++) {
            let arg = {
              name: method.args[i],
              position: i,
              isOptional: false,
              type: 'object',
            };

            let lastCharIndex = arg.name.length - 1;
            let firstChar = arg.name.charAt(0);
            let lastChar = arg.name.charAt(lastCharIndex);

            if(firstChar === '(' && lastChar === ')') {
              arg.name = arg.name.substring(1, lastCharIndex);
              arg.isOptional = true;
            }

            switch(arg.name) {
              case 'id':
              case 'id':
              break;
            }

            lastCharIndex = arg.name.length - 1;
            lastChar = arg.name.charAt(lastCharIndex);
            let nextToLastChar = arg.name.charAt(lastCharIndex - 1);

            // if argName is id or ends with ID
            if(arg.name === 'id' || (nextToLastChar === 'I' && lastChar === 'd' )) {
              arg.type = 'number';
            }

            method.parsedArgs.push(arg);
          }

          definitions.debug(`\t${resourceName}.${methodName}(${method.args}) -> ${method.url}\n`, method);

          // add listAll definitions
          if(methodName === 'list') {
            let listAllMethod = Object.assign({}, method); // copy method
            listAllMethod.url = `${opts.baseUrl}/${resourceName}/listAll`;
            definitions.api[resourceName].listAll = listAllMethod;

            definitions.debug(`\t${resourceName}.listAll(${listAllMethod.args}) -> ${listAllMethod.url}\n`, listAllMethod);
          }
        }
      }
    }
  }
  return definitions.api;
};
