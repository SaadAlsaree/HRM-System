namespace HRM.Hub.Application.Contracts;
public interface IStorageService
{
    (byte[], byte[]) UploadFileAsync(byte[] binaryFile, string fileName, string bucketName);
    byte[] DownloadFile(string fileName, string bucketName, byte[] _key, byte[] _iv);
}
