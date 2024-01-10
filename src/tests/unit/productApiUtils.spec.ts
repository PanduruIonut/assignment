import { vi} from 'vitest';
import { describe, expect, it, afterEach } from 'vitest'
import { fetchProductById, fetchProductsList, searchProducts } from '../../helpers/productApiUtils';


vi.mock('../../helpers/productApiUtils.ts', () => {
  return {
    fetchProductById: vi.fn(),
    fetchProductsList: vi.fn(),
    searchProducts: vi.fn()
  }
})

describe('Product API Functions', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('fetchProductsList should call productApiRequest with correct arguments', async () => {
    await fetchProductsList();
    expect(fetchProductsList).toBeCalledTimes(1)
  });

  it('fetchProductById should call productApiRequest with correct arguments', async () => {
    await fetchProductById(123);
    expect(fetchProductById).toBeCalledWith(123)
  });

  it('searchProducts should call productApiRequest with correct arguments', async () => {
    await searchProducts('apple');
    expect(searchProducts).toBeCalledWith('apple')
  })
});
