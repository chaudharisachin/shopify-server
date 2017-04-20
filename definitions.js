/*jslint es6 */

module.exports = (opts) => {

  'use strict';

  if(typeof(opts.appName) !== 'string') {
    opts.appName = 'shopify-app';
  }

  if(typeof(opts.baseUrl) !== 'string') {
    opts.baseUrl = `/api/${opts.appName}/:shopName`;
  }

  var definitions = {
    debug: require('debug')('shopify-server:definitions')
  }

  definitions.api = {
    apiPermission: {
      delete: { args: [] },
    },
    applicationCharge: {
      activate: { args: ['id', 'params']},
      create: { args: ['params']},
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
    },
    article: {
      authors: { args: [] },
      count: { args: ['blogId', '(params)'] },
      create: { args: ['blogId', 'params'] },
      delete: { args: ['blogId', 'id'] },
      get: { args: ['blogId', 'id', '(params)'] },
      list: { args: ['blogId', '(params)'] },
      tags: { args: ['(blogId), (params)'] },
      update: { args: ['blogId', 'id', 'params']},
    },
    asset: {
      create: { args: ['themeId', 'params', 'params']},
      delete: { args: ['themeId', 'params']},
      get: { args: ['themeId', 'params']},
      list: { args: ['themeId', '(params)'] },
      update: { args: ['themeId', 'params']},
    },
    blog: {
      count: { args: [] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    carrierService: {
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id'] },
      list: { args: [] },
      update: { args: ['id', 'params']},
    },
    checkout: {
      count: { args: ['(params)'] },
      list: { args: ['(params)'] },
    },
    collect: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id', '(params)'] },
      get: { args: ['id'] },
      list: { args: ['(params)'] },
    },
    comment: {
      approve: { args: ['id'] },
      count: { args: ['(params)'] },
      create: { args: ['params']},
      get: { args: ['id','(params)'] },
      list: { args: ['(params)'] },
      notSpam: { args: ['id'] },
      remove: { args: ['id'] },
      restore: { args: ['id'] },
      spam: { args: ['id'] },
      update: { args: ['id', 'params']},
    },
    country: {
      count: { args: [] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    customCollection: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    customer: {
      accountActivationUrl: { args: ['id'] },
      count: { args: [] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      search: { args: ['params']},
      update: { args: ['id', 'params']},
    },
    customerAddress: {
      create: { args: ['customerId', 'params']},
      default: { args: ['customerId', 'id'] },
      delete: { args: ['customerId', 'id'] },
      get: { args: ['customerId', 'id'] },
      list: { args: ['customerId', '(params)'] },
      set: { args: ['customerId', 'params']},
      update: { args: ['customerId', 'id', 'params']},
    },
    customerSavedSearch: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      customers: { args: ['id', '(params)'] },
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    discount: {
      create: { args: ['params']},
      delete: { args: ['id'] },
      disable: { args: ['id'] },
      enable: { args: ['id'] },
      get: { args: ['id'] },
      list: { args: ['(params)'] },
    },
    event: {
      count: { args: ['(params)'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
    },
    fulfillment: {
      cancel: { args: ['orderId', 'id'] },
      complete: { args: ['orderId', 'id'] },
      count: { args: ['orderId', '(params)'] },
      create: { args: ['orderId', 'params']},
      get: { args: ['orderId', 'id', '(params)'] },
      list: { args: ['orderId', '(params)'] },
      open: { args: ['orderId', 'id'] },
      update: { args: ['orderId', 'id', 'params']},
    },
    fulfillmentEvent: {
      create: { args: ['orderId', 'fulfillmentId', 'params']},
      delete: { args: ['orderId', 'fulfillmentId', 'id'] },
      get: { args: ['orderId', 'fulfillmentId', 'id'] },
      list: { args: ['orderId', 'fulfillmentId', '(params)'] },
      update: { args: ['orderId', 'fulfillmentId', 'id', 'params']},
    },
    fulfillmentService: {
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    giftCard: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      disable: { args: ['id'] },
      get: { args: ['id'] },
      list: { args: ['(params)'] },
      search: { args: ['params']},
      update: { args: ['id', 'params']},
    },
    location: {
      get: { args: ['id'] },
      list: { args: [] },
    },
    metafield: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    order: {
      cancel: { args: ['id', '(params)'] },
      close: { args: ['id'] },
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      open: { args: ['id'] },
      update: { args: ['id', 'params']},
    },
    orderRisk: {
      create: { args: ['orderId', 'params']},
      delete: { args: ['orderId', 'id'] },
      get: { args: ['orderId', 'id'] },
      list: { args: ['orderId'] },
      update: { args: ['orderId', 'id', 'params']},
    },
    page: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    policy: {
      list: { args: ['(params)'] },
    },
    product: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    productImage: {
      count: { args: ['productId', '(params)'] },
      create: { args: ['productId', 'params']},
      delete: { args: ['productId', 'id'] },
      get: { args: ['productId', 'id', '(params)'] },
      list: { args: ['productId', '(params)'] },
      update: { args: ['productId', 'id', 'params']},
    },
    productVariant: {
      count: { args: ['productId'] },
      create: { args: ['productId', 'params']},
      delete: { args: ['productId', 'id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['productId', '(params)'] },
      update: { args: ['id', 'params']},
    },
    province: {
      count: { args: ['countryId', '(params)'] },
      get: { args: ['countryId', 'id', '(params)'] },
      list: { args: ['countryId', '(params)'] },
      update: { args: ['countryId', 'id', 'params']},
    },
    recurringApplicationCharge: {
      activate: { args: ['id', 'params']},
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
    },
    redirect: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    refund: {
      get: { args: ['orderId', 'id', '(params)'] },
    },
    scriptTag: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    shippingZone: {
      list: { args: ['(params)'] },
    },
    shop: {
      get: { args: ['(params)'] },
    },
    smartCollection: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      order: { args: ['id', 'params']},
      update: { args: ['id', 'params']},
    },
    theme: {
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
    transaction: {
      count: { args: ['orderId'] },
      create: { args: ['orderId', 'params']},
      get: { args: ['orderId', 'id', '(params)'] },
      list: { args: ['orderId', '(params)'] },
    },
    usageCharge: {
      create: { args: ['recurringApplicationChargeId', 'params']},
      get: { args: ['recurringApplicationChargeId', 'id', '(params)'] },
      list: { args: ['recurringApplicationChargeId', '(params)'] },
    },
    user: {
      current: { args: [] },
      get: { args: ['id'] },
      list: { args: [] },
    },
    webhook: {
      count: { args: ['(params)'] },
      create: { args: ['params']},
      delete: { args: ['id'] },
      get: { args: ['id', '(params)'] },
      list: { args: ['(params)'] },
      update: { args: ['id', 'params']},
    },
  };


  for (var resourceName in definitions.api) {
    var resource = definitions.api[resourceName];
    definitions.debug(resourceName);

    for (var methodName in resource) {
      var method = resource[methodName];
      method.url = `${opts.baseUrl}/${resourceName}/${methodName}`;

      /*
       * Parse args to show if it is optional or not
       */
      method.parsedArgs = [];
      for (var i = 0; i < method.args.length; i++) {
        var arg = {
          name: method.args[i],
          position: i,
          isOptional: false,
        }

        var lastCharIndex = arg.name.length - 1;
        var firstChar = arg.name.charAt(0);
        var lastChar = arg.name.charAt(lastCharIndex);

        if(firstChar === '(' && lastChar === ')') {
          arg.name = arg.name.substring(1, lastCharIndex);
          arg.isOptional = true;
        }
        method.parsedArgs.push(arg);
      }

      definitions.debug(`\t${resourceName}.${methodName}(${method.args}) -> ${method.url}\n`, method);
      
    }

  }

  return definitions.api;
}