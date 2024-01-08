import { Product } from '../types/product-type';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


interface ProductApiRequestParams<T> extends RequestInit {
    method: HttpMethod;
    data?: T;
}

export async function productApiRequest<T>(
    url: string,
    { method, data, ...customConfig }: ProductApiRequestParams<T>
): Promise<T> {
    const config: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        ...customConfig,
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
        switch (response.status) {
            case 400:
                throw new Error('Bad request');
            case 401:
                throw new Error('Unauthorized');
            case 403:
                throw new Error('Forbidden');
            case 404:
                throw new Error('Not found');
            case 500:
                throw new Error('Internal server error');
            default:
                throw new Error(`HTTP error: ${response.statusText}`);
        }
    }

    return await response.json();
}

export function fetchProductsList(): Promise<{ products: Product[] }> {
    const url = import.meta.env.VITE_API_BASE_URL;
    return productApiRequest<{ products: Product[] }>(url, {
        method: 'GET',
    });
}

export function fetchProductById(id: number): Promise<Product> {
    const url = `${import.meta.env.VITE_API_BASE_URL}/${id}`;
    return productApiRequest<Product>(url, {
        method: 'GET',
    });
}

export function searchProducts(query: string): Promise<{ results: Product[] }> {
    const url = `${import.meta.env.VITE_API_BASE_URL}/search?query=${query}`;
    return productApiRequest<{ results: Product[] }>(url, {
        method: 'GET',
    });
}


