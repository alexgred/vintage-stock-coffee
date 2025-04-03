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
  userId: number;
  user: string | undefined;
  price: number;
  timestamp: number;
  minutes: number;
  spot: boolean;
  done: boolean;
}

/**
 * Interface for company item props.
 * @interface
 */
export interface OrderItemProps {
  order: Order;
  event: () => void;
  remove: () => void;
  index: number;
}

export type OrderStatus = 'active' | 'burning' | 'expired' | 'spot';
