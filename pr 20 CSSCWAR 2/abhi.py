post=input("Enter your post : ").split()
# print(post)
abhi=0
for element in post:
    if element.upper() == "ABHISHEK":
        abhi=1

if abhi==0:
    print("No")
else:
    print("Yes")

