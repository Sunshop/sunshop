# -*- coding: utf-8 -*-


import time

print(int(round(time.time()*1000)))


# JsonResponse需要传递dict()
# json.loads  字符串-> dict()   json.dumps dict()-> 序列化