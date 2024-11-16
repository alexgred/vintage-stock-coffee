/**
 * Interface order data from request.
 * @interface
 */
export interface OrderData {
  orders: Order[];
}

/**
 * Interface for order item.
 * @interface
 */
export interface Order {
  id: number;
  name: string;
  user: string;
  price: number;
  timestamp: number;
  minutes: number;
  done: boolean;
}

/**
 * Interface for company item props.
 * @interface
 */
export interface OrderItemProps {
  name: string;
  user: string;
  price: number;
  timestamp: number;
  minutes: number;
  event: () => void;
  buttonText?: string;
  index: number;
}

export type OrderStatus = 'active' | 'burning' | 'expired';
