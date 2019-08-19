=begin
input: string
output: prints register value
rules:  have 2 variables. stack and register
        register starts at 0
        method n = place value in the register
        method push = push value on stack, register is not changed
        method add = pops a value from the stack, add value to register
        method sub = pops a value from the stack, subtract value to register
        method mult = pops a value from the stack, multiplay value to register
        method div = pops a value from the stack, divide value to register
        method mod = pops a value from the stack, divides value to register 
                                                  save remainder to register
        method pop = remove the topmost item from the stack and place in register
        method print = print register value

        errors
          pop non-existent value
          unknown tokens
          divide by 0
          multiply by 0

=end

def minilang(str)
  operations = str.split.each
  stack = []
  register = 0
  operations.each do |op|
    case op
    when 'PUSH'  then stack << register
    when 'ADD'   then register += stack.pop
    when 'SUB'   then register -= stack.pop
    when 'MULT'  then register *= stack.pop
    when 'DIV'   then register /= stack.pop
    when 'MOD'   then register = register % stack.pop
    when 'POP'   then register = stack.pop
    when 'PRINT' then p register
    else              register = op.to_i
    end
  end
end



minilang(' 3 PUSH 5 MOD PUSH 4 PUSH 5 MULT PUSH 3 ADD PUSH -7 ADD DIV PRINT')