
def get_new_members():
    with open("names.csv") as f:
        names = f.read().splitlines()
    return names

def main():
    names = get_new_members()
    with open("../react-app/public/assets/memberList.csv", "+a") as f:
        for name in names:
            # Create new entry like this: Laura,Zielinski,Laura_Zielinski.jpg,Alpha,2024,https://www.linkedin.com/in/lauraczielinski/
            name_info = name.split(" ")
            data = []
            first_name = name_info[0]
            last_name = name_info[1]
            data = [first_name, last_name]
            data.append(first_name + "_" + last_name)
            data.append("Eta")
            data.append("2027")
            data.append("MISSING")
            string = ",".join(data)
            f.write(string + "\n")
    
if __name__ == "__main__":
    main()