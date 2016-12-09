import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addProduct: function(){
            var productPhotoDescription = this.get('productPhotoDescription');
            var supplyAbility = this.get('supplyAbility');
            var minimumOrder = this.get('minimumOrder');
            var certifications = this.get('certifications');
            var placeOfOgirin = this.get('placeOfOgirin');
            var productDescription = this.get('productDescription');
            var packagingDetails = this.get('packagingDetails');
            var pickupAddress = this.get('pickupAddress');
            var productLifeCycle = this.get('productLifeCycle');
            var pricingPolicy = this.get('pricingPolicy');
            
            
            var newProduct = this.store.createRecord('product', {
                productPhotoDescription: productPhotoDescription,
                supplyAbility: supplyAbility,
                minimumOrder: minimumOrder,
                certifications: certifications,
                placeOfOgirin: placeOfOgirin,
                productDescription: productDescription,
                packagingDetails: packagingDetails,
                pickupAddress: pickupAddress,
                productLifeCycle: productLifeCycle,
                pricingPolicy: pricingPolicy
            });
            
            
            newProduct.save();
            
            this.setProperties({
                productPhotoDescription: '',
                supplyAbility: '',
                minimumOrder: '',
                certifications: '',
                placeOfOgirin: '',
                productDescription: '',
                packagingDetails: '',
                pickupAddress: '',
                productLifeCycle: '',
                pricingPolicy: '',
            });
            
            
        }
    }
});
