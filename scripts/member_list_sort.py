def read_csv():
    with open("../assets/memberList.csv", "r") as f:
        member_data = f.read().splitlines()
    member_data = member_data[1:]
    return member_data

def sort_last_names(member_data):
    member_data_sorted = sorted(member_data, key=lambda x: x.split(",")[1])
    return member_data_sorted
def clean_data(member_data):
    member_data_cleaned = []
    for member in member_data:
        attributes = member.split(",")
        attributes[2] = attributes[0] + "_" + attributes[1] + ".jpg"
        attributes[5] = attributes[5].replace("MISSING", "")
        member_data_cleaned.append(",".join(attributes))
    return member_data_cleaned
def write_csv():
    member_data = read_csv()
    member_data_sorted = sort_last_names(member_data)
    member_data_cleaned = clean_data(member_data_sorted)
    with open("../assets/memberList.csv", "w") as f:
        f.write("First,Last,Headshot,Pledge Class,Grad Year,Linkedin\n")
        for member in member_data_cleaned:
            f.write(member + "\n")
def main():
    write_csv()
if __name__ == "__main__":
    main()