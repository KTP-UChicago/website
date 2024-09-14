def sort_last_names(names):
    names_sorted = sorted(names, key=lambda x: x.split()[-1])
    return names_sorted

def print_names(names):
    for name in names:
        print("\"" + name + "\",")

def read_csv():
    with open("names.csv", "r") as f:
        names = f.read().splitlines()
    names = [name.replace(",", " ") for name in names]
    return names

def main():
    names = read_csv()
    names_sorted = sort_last_names(names)
    print_names(names_sorted)

if __name__ == "__main__":
    main()