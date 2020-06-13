if [ ! -z $1 ];
then
 TAG=$1
else
 echo "A tag is required to build the Dockerfile"
 exit
fi

DOCKER_BUILD_COMMAND="docker image build -t $TAG -f Dockerfile ../"

echo "----------------------------------------------"
echo $DOCKER_BUILD_COMMAND
echo "----------------------------------------------"

eval $DOCKER_BUILD_COMMAND

