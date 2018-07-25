import math
def check_divisibility(a, b):
    #ben test
    """checks if b divides a
    
    Args:
        a (int): dividend
        b (int): divisor
        
    Returns:
        answer (str): either 'divisible' or 'not divisibile'"""
    
    float_version = float(a)/b
    int_version = a/b
    if float_version == int_version:
        answer = "divisible"
    else:
        answer = "not divisible"
    return answer

def find_factors(number):
    """ Clumsiy finds prime factors of number
    
    
    """
    
    i = 2
    prod = 1
    factors = []
    sqrt = math.sqrt(number)
    num = number
    
    while i < num:
        div = check_divisbility(number, i)
        if div == 'divisible':
            factors.append(i)
            number /= i
            prod *= i
            recurse = find_factors(number)
            
            #I recurse here because it prevents us wasting time playing with large numbers
            for fac in recurse:
                factors.append(fac)
                number /= fac
                prod *= fac
            #stop if we find a factor greater tha sqrt(number)
            if i >= sqrt:
                break
            #make sure we're not looking once we find all the factors   
            if prod == num:
                break
        else:
            if i> sqrt:
                if len(factors)==0:
                    factors.append(num)
                    prod *= num
                else: 
                    print i
                    recurse = find_factors(number)
                    for fac in recurse:
                        factors.append(fac)
                        prod *= fac
            if prod == num:
                break
            i = i+1
    if prod != num:
        raise ValueError ("This isn't right")
    return factors
