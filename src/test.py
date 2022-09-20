import os
import pathlib

my_file_path = pathlib.Path(__file__).parent.resolve()
print(os.listdir(my_file_path))

os.rename(my_file_path / "enum2", my_file_path / "enum")
print(os.listdir(my_file_path))