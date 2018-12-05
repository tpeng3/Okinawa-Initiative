from rest_framework.generics import ListAPIView, RetrieveAPIView
from videos.models import Video
from .serializers import VideoSerializer

class VideoListView(ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    
class VideoDetailView(RetrieveAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer