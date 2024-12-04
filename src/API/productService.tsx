import { AxiosResponse } from "axios";
import { IProduct } from "../interface";
import { Axios } from "./axiosConfig/axios";

export class productService {
  /**
   * Fetch all products with optional sorting and ordering.
   */
  static async getAll(
    sort?: string,
    order?: string,
    page?: number,
    limit?: number
  ): Promise<AxiosResponse<IProduct[]>> {
    const response = await Axios.get<IProduct[]>("products", {
      params: {
        ...(sort && { sort }),
        ...(order && { order }),
        ...(page && { page }),
        ...(limit && { limit }),
      },
    });

    return response;
  }

  /**
   * Fetch a single product by its ID.
   */
  static async getById(
    id: string | undefined
  ): Promise<AxiosResponse<IProduct>> {
    const response = await Axios.get<IProduct>(`products/${id}`);

    return response;
  }

  /**
   * Create a new product.
   */
  static async createProduct(
    product: IProduct
  ): Promise<AxiosResponse<IProduct>> {
    const response = await Axios.post<IProduct>("products", product);

    return response;
  }

  /**
   * Update an existing product by its ID.
   */
  static async updateProduct(
    id: number,
    product: Partial<IProduct>
  ): Promise<AxiosResponse<IProduct>> {
    const response = await Axios.put<IProduct>(`products/${id}`, product);

    return response;
  }

  /**
   * Delete a product by its ID.
   */
  static async deleteProduct(id: number): Promise<AxiosResponse<void>> {
    const response = await Axios.delete<void>(`products/${id}`);

    return response;
  }

  /**
   * Fetch products by category.
   */
  static async getByCategory(
    category: string,
    page?: number,
    limit?: number
  ): Promise<AxiosResponse<IProduct[]>> {
    const response = await Axios.get<IProduct[]>("products", {
      params: {
        category,
        ...(page && { page }),
        ...(limit && { limit }),
      },
    });

    return response;
  }

  /**
   * Search products by keyword.
   */
  static async searchProducts(
    query: string,
    page?: number,
    limit?: number
  ): Promise<AxiosResponse<IProduct[]>> {
    const response = await Axios.get<IProduct[]>("products/search", {
      params: {
        q: query,
        ...(page && { page }),
        ...(limit && { limit }),
      },
    });

    return response;
  }

  /**
   * Fetch a summary of products, e.g., for statistics.
   */
  static async getProductSummary(): Promise<
    AxiosResponse<{ total: number; categories: string[] }>
  > {
    const response = await Axios.get<{ total: number; categories: string[] }>(
      "products/summary"
    );

    return response;
  }
}
