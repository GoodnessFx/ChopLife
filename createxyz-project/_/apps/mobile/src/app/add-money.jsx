import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Check } from 'lucide-react-native';

export default function AddMoneyScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { accountId, accountName } = useLocalSearchParams();
  const [amount, setAmount] = useState('');
  
  const handleAddMoney = () => {
    // In a real app, this would call an API to add money to the account
    console.log(`Adding ₦${amount} to ${accountName} (ID: ${accountId})`);
    
    // Show success message and navigate back
    alert(`Successfully added ₦${amount} to your ${accountName || 'account'}`);
    router.back();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Money</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.accountName}>
          {accountName || 'Your Account'}
        </Text>
        
        <View style={styles.amountContainer}>
          <Text style={styles.currencySymbol}>₦</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            keyboardType="numeric"
            placeholderTextColor="#94A3B8"
            autoFocus
          />
        </View>
        
        <Text style={styles.helperText}>
          Enter the amount you want to add to your account
        </Text>
        
        <View style={styles.quickAmounts}>
          <TouchableOpacity 
            style={styles.quickAmountButton}
            onPress={() => setAmount('1000')}
          >
            <Text style={styles.quickAmountText}>₦1,000</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickAmountButton}
            onPress={() => setAmount('5000')}
          >
            <Text style={styles.quickAmountText}>₦5,000</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickAmountButton}
            onPress={() => setAmount('10000')}
          >
            <Text style={styles.quickAmountText}>₦10,000</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.addButton, 
            !amount ? styles.addButtonDisabled : null
          ]}
          onPress={handleAddMoney}
          disabled={!amount}
        >
          <Text style={styles.addButtonText}>Add Money</Text>
          <Check size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: 'white',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  accountName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 24,
    textAlign: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  currencySymbol: {
    fontSize: 40,
    fontWeight: '600',
    color: '#1E293B',
    marginRight: 8,
  },
  amountInput: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1E293B',
    minWidth: 150,
    textAlign: 'center',
  },
  helperText: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 32,
  },
  quickAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickAmountButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  quickAmountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  footer: {
    padding: 24,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  addButton: {
    backgroundColor: '#F97316',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#FDA382',
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginRight: 8,
  },
});