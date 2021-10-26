STOP_WORDS = [
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
    'i', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'were',
    'will', 'with'
]


def print_word_freq(file):
    """Read in `file` and print out the frequency of words in that file."""
    # use the with syntax to open files to ensure your file closes
    # at the end of the code's execution
    with open(file) as text:
        # create a new variable to hold the text
        # from the file that's being read
        lines = text.readlines()
        
        # loop through the lines in the text file
        for line in lines:
            # remove punctuation from each line in the loop
            line = line.replace(".", "")
            line = line.replace(chr(39), "")
            line = line.replace(";", "")
            line = line.replace("-", "")
            print(line)
        print(lines)


# We need this bit of code here in order for
# our script to run properly in our terminal
if __name__ == "__main__":
    import argparse
    from pathlib import Path

    parser = argparse.ArgumentParser(
    description='Get the word frequency in a text file.')
    parser.add_argument('file', help='file to read')
    args = parser.parse_args()

    # look for where the file lives in your system
    file = Path(args.file)
    if file.is_file():
        # run our function to check for word frequency
        print_word_freq(file)
    else:
        # print(f'{file} does not exist!')
        exit(1)