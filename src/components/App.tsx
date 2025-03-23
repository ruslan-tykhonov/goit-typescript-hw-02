import axios from 'axios';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import '../components/App.css';

import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import ImageModal from './ImageModal/ImageModal';

import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

function App() {
  //Modal open/close;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const openModal = image => {
    setSelectedImg({
      url: image.urls.regular,
      description: image.description,
      likes: image.likes,
      author: image.user.name,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImg('');
  };

  //State for searchBar
  const [searchTopic, setSearchTopic] = useState('');
  //State for ImageGallery
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMoreImages, setHasMoreImages] = useState(false);
  // Value for URL response
  const params = {
    client_id: 'KTgPCjIl5bHSKS3rJgiOFvqns88NWiKXgvLhb7v-WzM',
    per_page: 15,
    orientation: 'landscape',
    query: searchTopic,
  };
  // Function for submit
  const handleSearchSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.elements.searchInput.value.trim();
    if (searchValue === '') {
      toast.error('Поле не заповнене.');
      return;
    }
    setSearchTopic(searchValue);
    setPage(1);
    setImages([]);
    form.reset();
  };
  //Add page to before page
  const handleOnClick = () => {
    if (hasMoreImages) {
      setPage(prevPage => prevPage + 1);
    }
  };
  //Fetch DATA from server
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${params.client_id}&orientation=${params.orientation}&page=${page}&per_page=${params.per_page}&query=${params.query}`
        );
        setImages(prevImages => [...prevImages, ...data.results]);
        const totalPagesCalc = Math.ceil(data.total / params.per_page);
        setTotalPages(totalPagesCalc);
        setHasMoreImages(page < totalPagesCalc);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchTopic) {
      fetchImages();
    }
  }, [searchTopic, page]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {images && <ImageGallery images={images} onImageClick={openModal} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImg={selectedImg}
      />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && hasMoreImages && <LoadMoreBtn onClick={handleOnClick} />}
    </>
  );
}

export default App;
