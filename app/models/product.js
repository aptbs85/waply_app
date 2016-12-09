import DS from 'ember-data';

export default DS.Model.extend({
    productPhotoDescription: DS.attr('string'),
    supplyAbility: DS.attr('string'),
    minimumOrder: DS.attr('string'),
    certifications: DS.attr('string'),
    placeOfOgirin: DS.attr('string'),
    productDescription: DS.attr('string'),
    packagingDetails: DS.attr('string'),
    pickupAddress: DS.attr('string'),
    productLifeCycle: DS.attr('string'),
    pricingPolicy: DS.attr('string')
    
 
});
