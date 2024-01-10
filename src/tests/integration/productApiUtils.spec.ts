import { vi } from 'vitest';
import { describe, expect, it, afterEach } from 'vitest'
import { fetchProductById, fetchProductsList, searchProducts } from '../../helpers/productApiUtils';


describe('Product API Functions', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });


    it('should return product details for a valid product ID', async () => {
        const productId = 1;
        const product = await fetchProductById(productId);
        expect(product.id).toBe(productId);
    });

    it('should return a list of products', async () => {
        const products = (await fetchProductsList()).products;
        expect(products.length).toBeGreaterThan(0);
    });

    it('should return a list of products matching the search query', async () => {
        const query = 'apple';
        const products = (await searchProducts(query)).products;
        expect(products.length).toBeGreaterThan(0);
    });
});
