package com.fastdeliver.service;

import com.fastdeliver.model.Order;
import com.fastdeliver.model.User;
import com.fastdeliver.repository.OrderRepository;
import com.fastdeliver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public Order createOrder(Order order) {
        order.setStatus("CONFIRMED");
        order.setCreatedAt(LocalDateTime.now());
        order.setEstimatedTime(15); // 15 minutes estimated delivery
        return orderRepository.save(order);
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public List<Order> getDeliveryPartnerOrders(Long deliveryPartnerId) {
        return orderRepository.findByDeliveryPartnerId(deliveryPartnerId);
    }

    public List<Order> getOrdersByStatus(String status) {
        return orderRepository.findByStatus(status);
    }

    public Order updateOrderStatus(Long id, String status) {
        return orderRepository.findById(id).map(order -> {
            order.setStatus(status);
            order.setUpdatedAt(LocalDateTime.now());
            return orderRepository.save(order);
        }).orElse(null);
    }

    public Order assignDeliveryPartner(Long orderId, Long deliveryPartnerId) {
        return orderRepository.findById(orderId).map(order -> {
            Optional<User> deliveryPartner = userRepository.findById(deliveryPartnerId);
            if (deliveryPartner.isPresent()) {
                order.setDeliveryPartner(deliveryPartner.get());
                order.setStatus("ON_THE_WAY");
                return orderRepository.save(order);
            }
            return null;
        }).orElse(null);
    }

    public void cancelOrder(Long id) {
        orderRepository.findById(id).ifPresent(order -> {
            order.setStatus("CANCELLED");
            order.setUpdatedAt(LocalDateTime.now());
            orderRepository.save(order);
        });
    }
}
